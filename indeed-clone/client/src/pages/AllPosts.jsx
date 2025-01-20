

import { Search as SearchIcon } from '@mui/icons-material';
import { Box, Button, Card, CardContent, InputBase, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getAllPosts } from "../services/api";

const SearchWrapper = styled(Box)({
    marginTop: 74,
    display: 'flex',
    justifyContent: 'center',
    '& > div': {
        width: 500,
        height: 45,
        border: '1px solid #767676',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        marginRight: 20
    },
    '& > div > div': {
        width: '85%',
        margin: '0 20px'
    }
});

const FindButton = styled(Button)({
    height: 45
});

const PostWrapper = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 50,
    '& > div': {
        border: '1px solid #d4d2d0',
        borderRadius: 10,
        margin: 10,
        width: '30%',
        height: 300,
    }
});

const AllPosts = () => {
    const [posts, setPosts] = useState([]); // Stores all posts
    const [filteredPosts, setFilteredPosts] = useState([]); // Stores filtered posts
    const [text, setText] = useState(""); // Search input text

    // Fetch posts from the API
    useEffect(() => {
        const getData = async () => {
            const response = await getAllPosts();
            if (response && response.data) {
                console.log("Fetched posts from API:", response.data);
                setPosts(response.data);
                setFilteredPosts(response.data); // Initialize filtered posts
            } else {
                console.error("Failed to fetch posts:", response);
            }
        };
        getData();
    }, []);

    // Handle search logic
    const handleSearch = () => {
        const filtered = posts.filter(post =>
            post.profile.toLowerCase().includes(text.toLowerCase())
        );
        console.log("Filtered posts based on search:", filtered);
        setFilteredPosts(filtered);
    };

    return (
        <>
            <Header />
            <SearchWrapper>
                <Box>
                    <InputBase 
                        placeholder='Job title'
                        onChange={(e) => setText(e.target.value)} // Update search text
                    />
                    <SearchIcon />
                </Box>
                <FindButton
                    variant="contained"
                    onClick={handleSearch} // Trigger filtering
                >
                    Find Jobs
                </FindButton>
            </SearchWrapper>

            <PostWrapper>
                {filteredPosts.map(post => (
                    <Card key={post._id}>
                        <CardContent>
                            <Typography variant="h5">{post.profile}</Typography>
                            <Typography>{post.type === "Online" ? "Remote" : "Office"}</Typography>
                            <Typography>Salary : {post.salary}</Typography>
                            <Typography style={{ color: '#6f6f6f', margin: '10px 0' }}>
                                {post.description}
                            </Typography>
                            <Typography>
                                <b>Experience :</b> {post.experience}
                            </Typography>
                            <Typography>
                                <b>Technology :</b> {post.technology.join(", ")}
                            </Typography>
                            <Typography style={{ color: '#6f6f6f', marginTop: 'auto' }}>
                                Posted on {new Date(post.createdAt).toLocaleDateString()}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </PostWrapper>
        </>
    );
};

export default AllPosts;
