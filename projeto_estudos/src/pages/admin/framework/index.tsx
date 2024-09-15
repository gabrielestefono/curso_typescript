import Layout from "@/layout";
import { Tab, Tabs } from "@mui/material";

export default function Framework() {
  return (
    <Layout>
      <Tabs>
        <Tab label="Frontend"/>
        <Tab label="Backend"/>
        <Tab label="Mobile"/>
      </Tabs>
    </Layout>
  );
}
