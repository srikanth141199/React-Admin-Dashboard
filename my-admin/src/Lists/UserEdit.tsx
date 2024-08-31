import { Edit, SimpleForm, TextInput, TabbedForm } from "react-admin";
import { Stack } from "@mui/material";

export const UserEdit = () => (
  <Edit>
    <TabbedForm>
      <TabbedForm.Tab label="Main">
        <TextInput source="id" />
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Address">
        <Stack direction="row" spacing={2}>
          <TextInput source="address.street" />
          <TextInput source="phone" />
          <TextInput source="website" />
          <TextInput source="company.name" />
        </Stack>
      </TabbedForm.Tab>
    </TabbedForm>
  </Edit>
);
