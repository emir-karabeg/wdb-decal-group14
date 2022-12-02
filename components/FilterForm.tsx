import {Heading, Link, Text, Input, Icon, InputGroup, InputLeftElement, Stack} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import {FiFilter} from "react-icons/fi";

export default function FilterForm(){
    return (
        <div style={{padding: "40px", width:"350px", borderRight: "solid #D8D8D8", height: "690px"}}>
            <Stack spacing={4}>
                <div style={{display: "grid", gridTemplateColumns: "40px 70px auto"}}>
                    <Icon boxSize="1.5em" as={FiFilter} />
                    <Heading size="md">Filters</Heading>
                    <Link style={{paddingTop: "1px"}} variant="filter">Reset</Link>
                </div>
                <Text variant="underText">Filter students by classes to find students who share your learning interests.</Text>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <SearchIcon />
                    </InputLeftElement>
                    <Input style={{borderRadius: "10px"}} placeholder="Search for a class..."/>
                </InputGroup>
            </Stack>
        </div>
    );
}