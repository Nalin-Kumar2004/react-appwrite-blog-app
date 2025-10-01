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
                {/* Centered action bar above image */}
                {canEdit && (
                    <div className="max-w-2xl mx-auto mb-3">
                        <div className="w-full flex justify-center">
                            <div className="bg-white/80 backdrop-blur px-3 py-2 rounded-full shadow flex gap-2">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button
                                        bgColor="bg-green-500"
                                        className="px-5 py-2 text-sm !rounded-full shadow-sm hover:bg-green-600 focus-visible:ring-green-600"
                                    >
                                        Edit
                                    </Button>
                                </Link>
                                <Button
                                    bgColor="bg-red-500"
                                    className="px-5 py-2 text-sm !rounded-full shadow-sm hover:bg-red-600 focus-visible:ring-red-600"
                                    onClick={deletePost}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
                {/* Featured image wrapper constrained like cards */}
                <div className="w-full max-w-2xl mx-auto mb-6 relative rounded-xl overflow-hidden">
                    <div className="relative z-0 w-full flex items-center justify-center">
                        <img
                            src={appwriteService.getFileView(post.featuredImage)}
                            alt={post.title}
                            className="w-full h-auto max-h-[60vh] md:max-h-[70vh] object-contain rounded-lg shadow-md"
                        />
                    </div>
                </div>
                <div className="w-full mb-6">
                    <div className="max-w-2xl mx-auto">
                        <h1 className="text-3xl font-extrabold text-center">{post.title}</h1>
                    </div>
                </div>
                <div className="rendered-content mx-auto max-w-2xl bg-white rounded-lg p-6 shadow-md">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}