import React from "react";

const Review = () => {
  const Reviews = [
    {
      SlNo: 1,
      DoctorName: " John Doe",
      Specialization: "Cardio",
      name: "S.No",
    },
    {
      name: "Doctor Name",
      SlNo: 2,
      DoctorName: "Jane Smith",
      Specialization: "Dentist",
    },
    {
      name: "Doctor Speciality",
      SlNo: "",
      DoctorName: "",
      Specialization: "",
    },
    {
      name: "Provide Review ",
      SlNo: "",
      DoctorName: "",
      Specialization: "",
    },
    {
      name: "Review Given",
      SlNo: "",
      DoctorName: "",
      Specialization: "",
    },
  ];
  return (
    <div className="h-screen w-full  py-20 ">
      <div className="">
        <h1 className="text-[30px]">Reviews</h1>
        <div className=" flex my-20 w-full gap-10 ">
          {Reviews.map((i) => (
            <table key={i.id} className=" flex flex-col  ">
              <th>{i.name}</th>
              <tr>
                <tbody className="flex flex-col">
                  <td>{i.SlNo}</td>
                </tbody>
              </tr>
            </table>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
