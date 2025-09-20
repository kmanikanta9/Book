import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets_admin/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const { backendUrl, aToken } = useContext(AdminContext);
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (!docImg) {
        return toast.error("Image Not Selected");
      }
      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );
      //            Console.log form data
      formData.forEach((value, key) => {
        console.log(`${key}:${value}`);
      });
      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        { headers: { aToken } }
      );
      if(data.success){
        toast.success(data.message)
        setDocImg(false)
        setName('')
        setPassword('')
        setEmail('')
        setAddress1('')
        setAddress2('')
        setDegree('')
        setAbout('')
        setFees('')
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
        toast.error(error.message)
        console.log(error)
    }
  };
  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
  <p className="mb-3 text-lg font-medium">Add Doctor</p>

  <div className="bg-white px-8 py-8 border rounded-xl max-w-4xl mx-auto shadow-md">
    {/* Upload Doctor Picture */}
    <div className="flex items-center gap-4 mb-8 text-gray-500">
      <label htmlFor="doc-img">
        <img
          className="w-16 h-16 bg-gray-100 rounded-full object-cover cursor-pointer"
          src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
          alt="Doctor Upload"
        />
      </label>
      <input
        onChange={(e) => setDocImg(e.target.files[0])}
        type="file"
        id="doc-img"
        hidden
      />
      <p>
        <span className="font-medium">Upload doctor</span> <br /> picture
      </p>
    </div>

    {/* Form Fields - Two Column Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-600">
      {/* Left Column */}
      <div className="flex flex-col gap-4">
        <div>
          <p>Doctor Name</p>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="border rounded px-3 py-2 w-full"
            type="text"
            placeholder="Name"
            required
          />
        </div>

        <div>
          <p>Doctor Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border rounded px-3 py-2 w-full"
            type="email"
            placeholder="Email"
            required
          />
        </div>

        <div>
          <p>Doctor Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border rounded px-3 py-2 w-full"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <div>
          <p>Experience</p>
          <select
            onChange={(e) => setExperience(e.target.value)}
            value={experience}
            className="border rounded px-3 py-2 w-full"
          >
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i + 1} value={`${i + 1} Year`}>
                {i + 1} Year
              </option>
            ))}
          </select>
        </div>

        <div>
          <p>Fees</p>
          <input
            onChange={(e) => setFees(e.target.value)}
            value={fees}
            className="border rounded px-3 py-2 w-full"
            type="number"
            placeholder="Fees"
            required
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-4">
        <div>
          <p>Speciality</p>
          <select
            onChange={(e) => setSpeciality(e.target.value)}
            value={speciality}
            className="border rounded px-3 py-2 w-full"
          >
            <option value="General physician">General physician</option>
            <option value="Gynecologist">Gynecologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Pediatricians">Pediatricians</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Gastroenterologist">Gastroenterologist</option>
          </select>
        </div>

        <div>
          <p>Education</p>
          <input
            onChange={(e) => setDegree(e.target.value)}
            value={degree}
            className="border rounded px-3 py-2 w-full"
            type="text"
            placeholder="Education"
            required
          />
        </div>

        <div>
          <p>Address</p>
          <input
            onChange={(e) => setAddress1(e.target.value)}
            value={address1}
            className="border rounded px-3 py-2 w-full mb-2"
            type="text"
            placeholder="Address 1"
            required
          />
          <input
            onChange={(e) => setAddress2(e.target.value)}
            value={address2}
            className="border rounded px-3 py-2 w-full"
            type="text"
            placeholder="Address 2"
            required
          />
        </div>

        <div>
          <p>About Doctor</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className="w-full px-3 py-2 border rounded"
            placeholder="Write about doctor"
            rows={4}
            required
          />
        </div>
      </div>
    </div>

    {/* Submit Button */}
    <div className="mt-6">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 px-8 py-3 text-white rounded-lg shadow-md transition"
      >
        Add Doctor
      </button>
    </div>
  </div>
</form>

  );
};

export default AddDoctor;
