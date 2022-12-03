import ProfileReadView from "../components/ProfileReadView"
import ProfileEditView from "../components/ProfileEditView";
import NavBar from "../components/NavBar";
import { useRouter } from 'next/router';
import {useState} from "react";
import AddCourseForm from "../components/AddCourseForm";
import { Button, ButtonGroup, CloseButton, Divider, Heading, IconButton, Stack, Text} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import CourseListItemUpper from "../components/CourseListItemUpper";
import CourseListItemLower from "../components/CourseListItemLower";

export default function MyProfile() {
    const data = [{
        id: 0,
        courseListing: "COMPSCI 61A",
        courseFullName: "Introduction to Progamming and Program Design and Pretty Much Everything Programming",
        classNumber: "13234",
        classDis: "105",
        classLab: "123",
    }, {
        id: 1,
        courseListing: "EECS 16A",
        courseFullName: "Designing Information Devices and Systems",
        classNumber: "1",
        classDis: "105",
        classLab: "123",
    }, {
        id: 2,
        courseListing: "COMPSCI 61B",
        courseFullName: "Algorithms",
        classNumber: "13234",
        classDis: "1",
        classLab: "123",
    }, {
        id: 3,
        courseListing: "ANTHRO 2AC",
        courseFullName: "Introduction to Archaeology",
        classNumber: "13234",
        classDis: "105",
        classLab: "1",
    }, {
        id: 4,
        courseListing: "COMPSCI 61A",
        courseFullName: "Introduction to Progamming and Program Design and Pretty Much Everything Programming",
        classNumber: "13234",
        classDis: "105",
        classLab: "123",
    }, {
        id: 5,
        courseListing: "COMPSCI 61A",
        courseFullName: "Introduction to Progamming and Program Design and Pretty Much Everything Programming",
        classNumber: "13234",
        classDis: "105",
        classLab: "123",
    }, {
        id: 6,
        courseListing: "COMPSCI 61A",
        courseFullName: "Introduction to Progamming and Program Design and Pretty Much Everything Programming",
        classNumber: "13234",
        classDis: "105",
        classLab: "123",
    }, {
        id: 7,
        courseListing: "COMPSCI 61A",
        courseFullName: "Introduction to Progamming and Program Design and Pretty Much Everything Programming",
        classNumber: "13234",
        classDis: "105",
        classLab: "123",
    }, {
        id: 8,
        courseListing: "COMPSCI 61A",
        courseFullName: "Introduction to Progamming and Program Design and Pretty Much Everything Programming",
        classNumber: "13234",
        classDis: "105",
        classLab: "123",
    }, {
        id: 9,
        courseListing: "COMPSCI 61A",
        courseFullName: "Introduction to Progamming and Program Design and Pretty Much Everything Programming",
        classNumber: "13234",
        classDis: "105",
        classLab: "123",
    }];
    const router = useRouter();
    const [editState, setEditState] = useState(0); //0 for read, 1 for edit
    const profileView = editState === 0 ? <div style={{marginTop: "150px", marginLeft: "125px"}}>
        <Stack spacing={7}>
            <div style={{display: "flex", flexDirection: "row"}}>
                <Heading style={{ paddingRight: "20px" }} size="lg">My Profile</Heading>
                <Button onClick={() => setEditState(1)} variant="outline" leftIcon={<EditIcon />}>Edit Profile</Button>
            </div>
            <ProfileReadView profileImage={"https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} name={"John Doe"} major={"Computer Science"} gradDate={"2025"} userBio={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed metus dui. Integer et aliquam velit."} fbURL={"https://www.facebook.com/"} igURL={"https://www.instagram.com/"} scURL={"https://www.snapchat.com/en-US"} pronouns={"He/Him"}/>
        </Stack>
    </div>:<div style={{marginTop: "20px", marginLeft: "125px"}}>
        <div style={{width: "450px"}}>
            <Stack spacing={3}>
                <Heading size="lg">My Profile</Heading>
                <ProfileEditView profileImage={"https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} name={"John Doe"} major={"Computer Science"} gradDate={"2025"} userBio={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed metus dui. Integer et aliquam velit."} fbURL={"https://www.facebook.com/"} igURL={"https://www.instagram.com/"} scURL={"https://www.snapchat.com/en-US"} pronouns={""}/>
                <ButtonGroup gap={4}>
                    <Button onClick={() => setEditState(0)} colorScheme="messenger">Save</Button>
                    <Button onClick={() => setEditState(0)} colorScheme="gray">Cancel</Button>
                </ButtonGroup>
            </Stack>
        </div>
    </div>
    const courseListView = editState === 0 ? <div style={{marginLeft: "auto", marginRight: "125px", marginTop: "20px"}}>
        <div style={{width: "600px"}}>
            <Text style={{paddingBottom: "10px", textAlign: "center", color: "#A73CFC", fontWeight: "700"}}>My Classes</Text>
            <div>
                <Divider style={{backgroundColor: "#D8D8D8"}} variant="solid" />
                <div style={{height: "600px", overflowY: "auto", overflowX: "hidden"}}>
                    {data.map(function(d) {
                        return (
                            <div key={d.id}>
                                <div style={{display: "grid", gridTemplateColumns: "550px 5px", }}>
                                    <CourseListItemUpper courseListing={d.courseListing} courseFullName={d.courseFullName} />
                                    <IconButton style={{marginTop: "10px"}} aria-label="edit course" icon={<EditIcon />} colorScheme="gray" variant="ghost"></IconButton>
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "552px 5px", }}>
                                    <CourseListItemLower classNumber={d.classNumber} classDis={d.classDis} classLab={d.classLab} />
                                    <CloseButton />
                                </div>
                                <Divider style={{backgroundColor: "#D8D8D8"}} variant="solid" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </div>: <div style={{marginLeft: "auto", marginRight: "125px", marginTop: "20px"}}>
        <div style={{width: "600px"}}>
            <Text style={{paddingBottom: "10px", textAlign: "center", color: "#A73CFC", fontWeight: "700"}}>My Classes</Text>
            <div>
                <Divider style={{backgroundColor: "#D8D8D8"}} variant="solid" />
                <div style={{height: "225px", overflowY: "auto", overflowX: "hidden"}}>
                    {data.map(function(d) {
                            return (
                                <div key={d.id}>
                                    <div style={{display: "grid", gridTemplateColumns: "550px 5px", }}>
                                        <CourseListItemUpper courseListing={d.courseListing} courseFullName={d.courseFullName} />
                                        <IconButton style={{marginTop: "10px"}} aria-label="edit course" icon={<EditIcon />} colorScheme="gray" variant="ghost"></IconButton>
                                    </div>
                                    <div style={{display: "grid", gridTemplateColumns: "552px 5px", }}>
                                        <CourseListItemLower classNumber={d.classNumber} classDis={d.classDis} classLab={d.classLab} />
                                        <CloseButton />
                                    </div>
                                    <Divider style={{backgroundColor: "#D8D8D8"}} variant="solid" />
                                </div>
                            );
                        })}
                </div>
            </div>
            <AddCourseForm></AddCourseForm>
        </div>
    </div>
    return (
        <div>
            <NavBar profileImage={"https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} page={router.pathname}/>
            <div style={{display: "flex", flexDirection: "row"}}>
                {profileView}
                {courseListView}
            </div>
        </div>
    );
}