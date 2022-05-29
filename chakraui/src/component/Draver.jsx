import React from "react";
import style from "../component/style.module.css";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";

function PlacementExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

  let data = [
    {
      name: "Home",
      icon: "fa-house",
    },
    {
      name: "Tranding",
      icon: "fa-arrow-trend-up",
    },
    {
      name: "Explore",
      icon: "fa-compass",
    },
    {
      name: "Favourites",
      icon: "fa-star",
    },
    {
      name: "Settings",
      icon: "fa-gears",
    },
  ];

  var icon = <i class="fa-solid fa-gears"></i>
  return (
    <>
       <div className={style.div}>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>

        <Stack direction="row" mb="4">
          <Radio value="top">Top</Radio>
          <Radio value="right">Right</Radio>
          <Radio value="bottom">Bottom</Radio>
          <Radio value="left">Left</Radio>
        </Stack>
      </RadioGroup>
      <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      </div>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" className={style.logo}><b>Logo</b></DrawerHeader>
          <DrawerBody className={style.homeDiv}>
            {data.map((el,index) => (
              <>
                <p key={index} className={style.home}>
                  {" "}
                  <i key={index} className= {`fa-solid ${el.icon} ${style.icon}`} ></i>
                  {el.name}
                </p>
              </>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default PlacementExample;
