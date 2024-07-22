import * as Yup from 'yup';

const validationSchema = Yup.object({
  userName: Yup.string().required('User Name is required'),
  userRole: Yup.string().required('User Role is required'),
  userEmail: Yup.string().email('Invalid email address').required('User Email is required'),
  userStatus: Yup.string().required('User Status is required'),
});

export default validationSchema;
