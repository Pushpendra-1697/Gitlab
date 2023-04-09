import { Box, Input, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { addUser } from '../redux/Users/user.action';
import { useDispatch } from 'react-redux';


let initialState = {
  name: "",
  email: "",
  bio: ''
};
const UserForm = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email } = formData;
    if (name === "" || email === "") {
      alert(`Please Fill Mandatory * Fileld`);
      return;
    };
    if (email.includes("@gmail.com") === false) {
      alert("Email Not Correct");
      return;
    };

    dispatch(addUser(formData));

    setFormData({
      name: "",
      email: "",
      bio: ''
    });
  };

  const { name, email, bio } = formData;
  return (
    <Box mb="40px" textAlign={"center"} display="flex" justifyContent={"center"} alignItems="center">
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", width: "350px", padding: "10px", m: "auto", textAlign: "center" }}
      >
        <Input
          value={name}
          name="name"
          w="300px"
          placeholder="User Name"
          onChange={handleChange}
          type='text'
          maxLength={50}
          minLength={1}
          isRequired={true}
        />
        <Input
          value={email}
          name="email"
          w="300px"
          placeholder="User Email"
          onChange={handleChange}
          type='email'
          isRequired={true}
        />
        {email.includes("@gmail.com") === false ? <p style={{ color: "red" }}>Not valid Email*</p> : null}

        <Textarea onChange={handleChange} isRequired={false} value={bio} name="bio" maxLength="200" placeholder="Enter Bio here (optional)"></Textarea>

        <Input
          bg="goldenrod"
          color={"white"}
          width={"300px"}
          type={"submit"}
          value="Add User"
        />
      </form>
    </Box>
  );
}

export default UserForm;