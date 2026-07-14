import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getusers, createuser, deleteuser, updateuser } from '../services/api.js';

const initialUserState = {
    name: '',
    email: '',
    mobileNumber: '',
    empId: '',
    designation: '',
    age: ''
};

const EmployeeCards = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState(initialUserState);
    const [isEdit, setIsEdit] = useState(false);
    const [editUserId, setEditUserId] = useState(null);

    async function getUserData() {
        try {
            const response = await axios.get(getusers);
            setUsers(response.data.users || []);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    useEffect(() => {
        getUserData();
    }, []);

    function changeHandler(e) {
        const { name, value } = e.target;
        setNewUser((preItem) => ({ ...preItem, [name]: value }));
    }

    function resetForm() {
        setNewUser(initialUserState);
        setIsEdit(false);
        setEditUserId(null);
    }

    async function createUser() {
        try {
            await axios.post(createuser, {
                ...newUser,
                age: newUser.age === '' ? null : Number(newUser.age)
            });
            await getUserData();
            resetForm();
        } catch (error) {
            console.error('Error creating user:', error);
        }
    }

    async function deleteHandler(userId) {
        try {
            await axios.delete(`${deleteuser}/${userId}`);
            await getUserData();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }

    function editHandler(user) {
        setNewUser({
            name: user.name || '',
            email: user.email || '',
            mobileNumber: user.mobileNumber || '',
            empId: user.empId || '',
            designation: user.designation || '',
            age: user.age ?? ''
        });
        setIsEdit(true);
        setEditUserId(user._id);
    }

    async function updateUser(userId) {
        try {
            await axios.put(`${updateuser}/${userId}`, {
                ...newUser,
                age: newUser.age === '' ? null : Number(newUser.age)
            });
            await getUserData();
            resetForm();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    }

    async function submitHandler(e) {
        e.preventDefault();
        if (isEdit) {
            updateUser(editUserId);
        } else {
            createUser();
        }
    }

    return (
        <div className="p-2 bg-[#f3efe7] text-black">
            <h1 className="text-lg font-bold mb-2">Employee Management</h1>

            <form onSubmit={submitHandler} className="border border-black p-2 mb-2 bg-white">
                <input
                    type="text"
                    name="name"
                    placeholder="Employee Name"
                    onChange={changeHandler}
                    value={newUser.name}
                    className="w-full border border-black p-1 mb-2"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={changeHandler}
                    value={newUser.email}
                    className="w-full border border-black p-1 mb-2"
                />

                <input
                    type="text"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    onChange={changeHandler}
                    value={newUser.mobileNumber}
                    className="w-full border border-black p-1 mb-2"
                />

                <input
                    type="text"
                    name="empId"
                    placeholder="Employee ID"
                    onChange={changeHandler}
                    value={newUser.empId}
                    className="w-full border border-black p-1 mb-2"
                />

                <input
                    type="text"
                    name="designation"
                    placeholder="Designation"
                    onChange={changeHandler}
                    value={newUser.designation}
                    className="w-full border border-black p-1 mb-2"
                />

                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    onChange={changeHandler}
                    value={newUser.age}
                    className="w-full border border-black p-1 mb-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />

                <button
                    type="submit"
                    className="w-full border border-black bg-gray-200 p-1"
                >
                    {isEdit ? 'Update Employee' : 'Create Employee'}
                </button>
            </form>

            <div>
                {users.map((item, i) => (
                    <div
                        key={item._id || i}
                        className="border border-black p-2 mb-2 bg-[#fdfaf2]"
                    >
                        <p>Name: {item.name}</p>
                        <p>Email: {item.email}</p>
                        <p>Mobile: {item.mobileNumber}</p>
                        <p>Employee ID: {item.empId}</p>
                        <p>Designation: {item.designation}</p>
                        <p>Age: {item.age}</p>

                        <div className="flex gap-1 mt-2">
                            <button
                                type="button"
                                onClick={() => editHandler(item)}
                                className="flex-1 border border-black bg-gray-100 p-1"
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                onClick={() => deleteHandler(item._id)}
                                className="flex-1 border border-black bg-gray-100 p-1"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmployeeCards;