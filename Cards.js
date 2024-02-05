import React, { useState } from "react";
import Card from "./Card"


function Cards(props) {

    let courses = props.courses;
    let category = props.category;

    const [likedCourses, setLikedCourses] = useState([]);

    console.log("Printing dta");
    console.log(courses);

    //returns ypu a list of all cources recevied from the api response

    function getCourses() {

        if (category === "All") {
            let allCourses = [];

            Object.values(courses).forEach(courseCategory => {
                courseCategory.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }

        else{
            // MAin sirf specific category ka array pass karuga...

            return courses[category];
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => {
                    return (
                        <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                    )
                })
            }
        </div>
    );
}

export default Cards;