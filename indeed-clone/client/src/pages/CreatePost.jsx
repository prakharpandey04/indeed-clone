

import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import { routhPath } from "../routes/Route";
import { savePost } from "../services/api";

const Component = styled(Box)({
    padding: "80px 200px",
    background: "#F5F5F5",
});

const Container = styled(Box)({
    display: "flex",
    background: "#FFFFFF",
    borderRadius: "20px",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 70px",
    "&>p": {
        fontSize: 35,
        fontWeight: 700,
        opacity: ".7",
    },
});

const FormWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
    background: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    "& > *": {
        marginTop: "20px !important",
    },
});

const defaultObj = {
    profile: "",
    type: "",
    description: "",
    experience: "",
    technology: [], // Ensure this is initialized as an empty array
    salary: "",
};

const options = {
    type: ["Online", "Offline"],
    experience: ["0-2 Years", "3-5 Years", "5 Years above"],
    technology: [
        "Java",
        "JavaScript",
        "React",
        "Angular",
        "Node.js",
        "Docker",
        "AWS",
        "HTML",
        "CSS",
        "C",
        "Python",
        "C#",
        "Ruby",
    ],
    salary: [
        "Rs 0-300000",
        "Rs 300000-500000",
        "Rs 500000-800000",
        "Rs 800000-1000000",
        "Rs 1000000-1500000",
        "Rs 1500000-2000000",
        "Rs 2000000 above",
    ],
};

const CreatePost = () => {
    const [data, setData] = useState(defaultObj);
    const navigate = useNavigate();

    const image =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3zkKYlIHjjoQrE4e-a5xiJIaK0reWlcDhewsx8rjV87d8M82";

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "technology") {
            setData((prev) => ({
                ...prev,
                technology: Array.isArray(value) ? value : [], // Ensure it's always an array
            }));
        } else {
            setData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const saveJob = async () => {
        console.log("Payload being sent:", data);
        try {
            const response = await savePost(data);
            console.log("API Response:", response);
            navigate(routhPath.posts);
        } catch (error) {
            console.error("Error saving job:", error);
        }
    };

    return (
        <>
            <Header />
            <Component>
                <Container>
                    <Typography>Create a job post</Typography>
                    <img src={image} alt="create" />
                </Container>
                <FormWrapper>
                    <TextField
                        placeholder="Job Title"
                        name="profile"
                        value={data.profile}
                        onChange={handleChange}
                    />
                    <Dropdown
                        label="Job Type"
                        id="job-type-label"
                        value={data.type}
                        handleChange={handleChange}
                        name="type"
                        options={options.type}
                    />
                    <TextField
                        placeholder="Job Description"
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                        multiline
                        rows={4}
                    />
                    <Dropdown
                        label="Experience"
                        id="job-experience-label"
                        value={data.experience}
                        handleChange={handleChange}
                        name="experience"
                        options={options.experience}
                    />
                    <Dropdown
                        label="Technology"
                        id="job-technology-label"
                        value={data.technology}
                        handleChange={handleChange}
                        name="technology"
                        options={options.technology}
                        multiple
                    />
                    <Dropdown
                        label="Salary"
                        id="job-salary-label"
                        value={data.salary}
                        handleChange={handleChange}
                        name="salary"
                        options={options.salary}
                    />
                    <Button
                        onClick={saveJob}
                        variant="contained"
                        disabled={!data.profile || !data.type || !data.description}
                    >
                        Save Job
                    </Button>
                </FormWrapper>
            </Component>
        </>
    );
};

export default CreatePost;
