import CreateFrameworkTab from "@/components/admin/pages/CreateFrameworkTab";
import ControlledCustomTab from "@/components/basicos/ControlledCustomTab";
import Layout from "@/layout";
import { Typography } from "@mui/material";

export default function Linguagem() {
  return (
    <Layout>
      <ControlledCustomTab labels={["Frontend", "Backend", "Mobile"]}>
        {({ value }) => (
          <>
            {value === 0 && (
              <ControlledCustomTab
                labels={["Framework", "Complemento", "Versão"]}
              >
                {({ value }) => (
                  <>
                    <CreateFrameworkTab index={0} value={value} />
                    {value === 1 && <Typography>Complemento</Typography>}
                    {value === 2 && <Typography>Versão</Typography>}
                  </>
                )}
              </ControlledCustomTab>
            )}
            {value === 1 && (
              <ControlledCustomTab
                labels={["Framework", "Complemento", "Versão"]}
              >
                {({ value }) => (
                  <>
                    <CreateFrameworkTab index={0} value={value} />
                    {value === 1 && <Typography>Complemento</Typography>}
                    {value === 2 && <Typography>Versão</Typography>}
                  </>
                )}
              </ControlledCustomTab>
            )}
            {value === 2 && (
              <ControlledCustomTab
                labels={["Framework", "Complemento", "Versão"]}
              >
                {({ value }) => (
                  <>
                    <CreateFrameworkTab index={0} value={value} />
                    {value === 1 && <Typography>Complemento</Typography>}
                    {value === 2 && <Typography>Versão</Typography>}
                  </>
                )}
              </ControlledCustomTab>
            )}
          </>
        )}
      </ControlledCustomTab>
    </Layout>
  );
}
