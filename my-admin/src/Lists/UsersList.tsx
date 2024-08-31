import { Datagrid, EmailField, List, SearchInput, SimpleList, TextField } from 'react-admin';

export const UserList = () => (
    <List sort={{field :"username", order : "ASC"}} title = "User List" aside={<div>Aside</div>}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);