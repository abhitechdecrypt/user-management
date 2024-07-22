import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { TextField, MenuItem, Button, Box, Grid, Paper } from "@mui/material";
import validationSchema from "../service/ValidationSchema";
import imageTwo from "../images/project-management.png";
import axiosInstance from "../service/axiosInstance";
import { BASE_URL, CREATE_USER, GET_USER_BY_ID, UPDATE_USER } from "../service/API_CONSTANT";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const CreateUser = () => {
   const { id } = useParams();
   const [user, setUser] = React.useState(null);
   const navigate = useNavigate();

   useEffect(() => {
      if (id) {
         axiosInstance
            .get(BASE_URL + GET_USER_BY_ID + "/" + id)
            .then((res) => {
               setUser(res.data);
            })
            .catch((err) => {
               toast.error(err.response.data.message);
            });
      }
   }, [id]);

   const initialValues = {
      userName: user?.userName || "",
      userRole: user?.userRole || "",
      userEmail: user?.userEmail || "",
      userStatus: user?.userStatus || "Active", // Default placeholder value
   };

   const onSubmit = (values) => {
      if (id) {
         axiosInstance
            .put(BASE_URL + UPDATE_USER+"/"+id, values)
            .then((res) => {
               toast.success("User Updated Successfully", {
                  onClose: () => {
                     navigate("/list");
                  },
               });
            })
            .catch((error) => {
               toast.error("Something went wrong");
            });
      } else {
         axiosInstance
            .post(BASE_URL + CREATE_USER, values)
            .then((res) => {
               toast.success("User Created Successfully", {
                  onClose: () => {
                     navigate("/list");
                  },
               });
            })
            .catch((error) => {
               toast.error("Something went wrong");
            });
      }
   };

   return (
      <Box sx={{ padding: 4 }}>
         <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
               <img src={imageTwo} alt="User Create" />
            </Grid>
            <Grid item xs={12} md={8}>
               <Paper elevation={3} sx={{ padding: 2 }}>
                  <Formik
                     initialValues={initialValues}
                     enableReinitialize={true} 
                     validationSchema={validationSchema}
                     onSubmit={onSubmit}
                  >
                     {({ errors, touched }) => (
                        <Form>
                           <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                              <Field
                                 as={TextField}
                                 name="userName"
                                 label="User Name"
                                 variant="outlined"
                                 error={touched.userName && Boolean(errors.userName)}
                                 helperText={touched.userName && errors.userName}
                              />
                              <Field
                                 as={TextField}
                                 name="userRole"
                                 label="User Role"
                                 variant="outlined"
                                 select
                                 error={touched.userRole && Boolean(errors.userRole)}
                                 helperText={touched.userRole && errors.userRole}
                              >
                                 <MenuItem value="Admin">Admin</MenuItem>
                                 <MenuItem value="User">User</MenuItem>
                                 <MenuItem value="Guest">Guest</MenuItem>
                              </Field>
                              <Field
                                 as={TextField}
                                 name="userEmail"
                                 label="User Email"
                                 variant="outlined"
                                 error={touched.userEmail && Boolean(errors.userEmail)}
                                 helperText={touched.userEmail && errors.userEmail}
                              />
                              <Field
                                 as={TextField}
                                 name="userStatus"
                                 label="User Status"
                                 variant="outlined"
                                 select
                                 defaultValue="Active" // Default placeholder value
                                 error={touched.userStatus && Boolean(errors.userStatus)}
                                 helperText={touched.userStatus && errors.userStatus}
                              >
                                 <MenuItem value="Active">Active</MenuItem>
                                 <MenuItem value="Inactive">Inactive</MenuItem>
                              </Field>
                              <Button type="submit" variant="contained" color="primary">
                                 Submit
                              </Button>
                           </Box>
                        </Form>
                     )}
                  </Formik>
               </Paper>
            </Grid>
         </Grid>
      </Box>
   );
};

export default CreateUser;
