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

    const isAuthor = post && userData ? post.userId === userData.$id : false;

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
        <div className="py-8 min-h-screen">
            <Container>
                <div className="max-w-4xl mx-auto">
                    {/* Featured Image */}
                    <div className="w-full flex justify-center mb-8 relative">
                        <img
                            src={appwriteService.getFileView(post.featuredImage)}
                            alt={post.title}
                            className="rounded-xl max-h-[500px] w-full object-cover shadow-lg"
                        />

                        {isAuthor && (
                            <div className="absolute right-4 top-4">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-500" className="mr-3">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-500" onClick={deletePost}>
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
                    
                    {/* Title */}
                    <div className="w-full mb-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">{post.title}</h1>
                    </div>
                    
                    {/* Content */}
                    <div className="rendered-content mx-auto max-w-3xl bg-white rounded-xl p-8 shadow-lg prose prose-lg">
                        {parse(post.content)}
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}