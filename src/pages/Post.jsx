import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    // More robust author check: match stored userId OR Appwrite document permissions for this user
    const canEdit = React.useMemo(() => {
        if (!post || !userData) return false;
        if (post.userId && post.userId === userData.$id) return true;
        const perms = post.$permissions || [];
        // Appwrite permissions look like: read("any"), update("user:USER_ID") etc.
        return perms.some((p) =>
            (p.startsWith('update(') || p.startsWith('delete(')) && p.includes(`user:${userData.$id}`)
        );
    }, [post, userData]);

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                {/* Featured image wrapper constrained like cards */}
                <div className="w-full max-w-2xl mx-auto mb-6 relative bg-white rounded-xl p-2 shadow-md overflow-hidden">
                    {/* Overlay buttons on md+ screens */}
                    {canEdit && (
                        <div className="hidden md:flex absolute right-3 top-3 z-10 gap-2">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-0">Edit</Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>Delete</Button>
                        </div>
                    )}
                    <div className="relative z-0 w-full h-56 sm:h-64 md:h-96 lg:h-[28rem] flex items-center justify-center">
                        <img
                            src={appwriteService.getFileView(post.featuredImage)}
                            alt={post.title}
                            className="max-h-full max-w-full object-contain rounded-lg"
                        />
                    </div>
                </div>
                {/* Inline buttons on small screens (always visible, no overlay) */}
                {canEdit && (
                    <div className="md:hidden max-w-2xl mx-auto -mt-2 mb-4 flex justify-end gap-2 px-2">
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button bgColor="bg-green-500">Edit</Button>
                        </Link>
                        <Button bgColor="bg-red-500" onClick={deletePost}>Delete</Button>
                    </div>
                )}
                <div className="w-full mb-6 text-center">
                    <h1 className="text-3xl font-extrabold mb-2">{post.title}</h1>
                </div>
                <div className="rendered-content mx-auto max-w-2xl bg-white rounded-lg p-6 shadow-md">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}