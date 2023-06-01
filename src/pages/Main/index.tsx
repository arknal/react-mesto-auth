import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Profile from "widgets/profile";

function MainPage() {
  return (
    <main className="content">
      <Profile />
      <Tabs variant="unstyled" marginTop="50px">
        <TabList>
          <Tab
            color="#fff"
            borderBottom="2px solid transparent"
            fontSize="18px"
            _hover={{ opacity: ".8" }}
            _selected={{ borderBottom: "2px solid #fff" }}
          >
            Лента
          </Tab>
          <Tab
            color="#fff"
            fontSize="18px"
            borderBottom="2px solid transparent"
            _hover={{ opacity: ".8" }}
            _selected={{ borderBottom: "2px solid #fff" }}
          >
            Мои карточки
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel p="0">
            {/*<section className="gallery">
              {serviceCards
                .map((item) => {
                  return <Card {...item} key={item._id} />;
                })
                .reverse()}
            </section>*/}
            feed
          </TabPanel>
          <TabPanel p="0">
            <section className="gallery">
              {/*userCards
                .map((item) => {
                  return <Card {...item} key={item._id} />;
                })
                .reverse()*/}{" "}
              my cards
            </section>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  );
}

export default MainPage;
