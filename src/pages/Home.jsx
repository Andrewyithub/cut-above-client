import Box from "@mui/material/Box";
import ContactUs from "../components/home/ContactUs";
import Services from "../components/home/Services";
import TeamMembers from "../components/home/TeamMembers";
import { theme } from "../styles/styles";

const people = [
  { id: 1, name: "Matthew" },
  { id: 2, name: "Michael" },
  { id: 3, name: "John" },
  { id: 4, name: "David" },
  { id: 5, name: "Michael" },
  { id: 6, name: "Sophia" },
  { id: 7, name: "Emma" },
  { id: 8, name: "David" },
  { id: 9, name: "Emma" },
  { id: 10, name: "Sophia" },
  { id: 11, name: "Daniel" },
  { id: 12, name: "David" },
  { id: 13, name: "Olivia" },
  { id: 14, name: "John" },
  { id: 15, name: "Jane" },
  { id: 16, name: "Jane" },
  { id: 17, name: "Jane" },
  { id: 18, name: "Matthew" },
  { id: 19, name: "Matthew" },
  { id: 20, name: "Olivia" },
];

const employees = [
  {
    id: 1,
    firstName: "Andre",
    image: "https://placehold.co/900x1600",
    profile:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis vulputate enim nulla aliquet porttitor lacus. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin.",
  },
  {
    id: 2,
    firstName: "Salah",
    image: "https://placehold.co/900x1600",
    profile:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis vulputate enim nulla aliquet porttitor lacus. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin.",
  },
  {
    id: 3,
    firstName: "Obi",
    image: "https://placehold.co/900x1600",
    profile:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis vulputate enim nulla aliquet porttitor lacus. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin.",
  },
];

export default function Home() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "2rem 0",
          padding: { sm: "0 1rem", md: "0" },
          overflowX: "scroll",
          overflow: { md: "visible" },
          flexWrap: { md: "wrap" },
          justifyContent: { md: "center" },
        }}
      >
        {people.map(({ name, id }) => (
          <Box
            key={id}
            sx={{
              backgroundColor: "lightblue",
              border: "0",
              borderRadius: "5px",
              color: "hotpink",
              fontSize: "1rem",
              letterSpacing: "2px",
              lineHeight: "1.5rem",
              padding: "4px 1rem",
              marginRight: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            {name}
          </Box>
        ))}
      </Box>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mattis vulputate
        enim nulla aliquet porttitor lacus. Nec tincidunt praesent semper
        feugiat nibh sed pulvinar proin. Aenean pharetra magna ac placerat
        vestibulum lectus mauris ultrices eros. Tempus urna et pharetra pharetra
        massa. In massa tempor nec feugiat. Amet nulla facilisi morbi tempus
        iaculis urna id. Integer malesuada nunc vel risus commodo viverra
        maecenas accumsan lacus. Elementum facilisis leo vel fringilla est.
        Massa vitae tortor condimentum lacinia quis vel. Massa massa ultricies
        mi quis hendrerit dolor. Tincidunt praesent semper feugiat nibh sed
        pulvinar proin. In egestas erat imperdiet sed. Eget magna fermentum
        iaculis eu non. Imperdiet dui accumsan sit amet nulla facilisi. Placerat
        duis ultricies lacus sed turpis tincidunt id aliquet. Scelerisque felis
        imperdiet proin fermentum. Cras tincidunt lobortis feugiat vivamus at.
        Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies.
        Varius duis at consectetur lorem donec. Tempus iaculis urna id volutpat
        lacus. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi
        nullam. Quis ipsum suspendisse ultrices gravida dictum fusce ut
        placerat. Tincidunt ornare massa eget egestas purus viverra accumsan.
        Elit eget gravida cum sociis natoque penatibus et. Hac habitasse platea
        dictumst quisque sagittis purus sit. Lorem donec massa sapien faucibus
        et molestie ac feugiat sed. A iaculis at erat pellentesque adipiscing
        commodo elit at imperdiet. A diam maecenas sed enim. Volutpat odio
        facilisis mauris sit amet massa vitae tortor condimentum. In tellus
        integer feugiat scelerisque varius. Nunc sed id semper risus in
        hendrerit gravida. Sollicitudin ac orci phasellus egestas tellus rutrum
        tellus pellentesque eu. Sit amet aliquam id diam maecenas ultricies mi.
        Vitae congue mauris rhoncus aenean vel elit scelerisque mauris.
        Convallis tellus id interdum velit laoreet. Consequat interdum varius
        sit amet. Bibendum arcu vitae elementum curabitur. Fermentum iaculis eu
        non diam phasellus vestibulum. Malesuada bibendum arcu vitae elementum
        curabitur vitae. At urna condimentum mattis pellentesque. Vel orci porta
        non pulvinar neque laoreet suspendisse interdum consectetur. Quis varius
        quam quisque id diam vel. Sit amet consectetur adipiscing elit ut
        aliquam purus sit amet. Eu turpis egestas pretium aenean pharetra magna
        ac placerat. At consectetur lorem donec massa sapien faucibus. Dignissim
        diam quis enim lobortis scelerisque. Congue eu consequat ac felis donec
        et. Id venenatis a condimentum vitae sapien pellentesque habitant morbi
        tristique. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus.
        Proin fermentum leo vel orci porta. Aenean sed adipiscing diam donec
        adipiscing tristique risus. Mattis molestie a iaculis at erat
        pellentesque adipiscing. Proin fermentum leo vel orci porta non pulvinar
        neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim
        diam quis. Ut sem nulla pharetra diam sit amet nisl suscipit. Nibh
        praesent tristique magna sit amet purus gravida quis blandit. Dui
        accumsan sit amet nulla facilisi morbi tempus iaculis. Maecenas volutpat
        blandit aliquam etiam erat velit scelerisque in dictum. Pretium lectus
        quam id leo in vitae. Nulla posuere sollicitudin aliquam ultrices
        sagittis orci a scelerisque purus. Integer quis auctor elit sed. Magna
        sit amet purus gravida. Id aliquet risus feugiat in. Natoque penatibus
        et magnis dis parturient montes nascetur. Mauris in aliquam sem
        fringilla ut morbi. Consequat ac felis donec et odio pellentesque diam
        volutpat. Sit amet consectetur adipiscing elit ut. Dictumst quisque
        sagittis purus sit. Nisl tincidunt eget nullam non nisi est. Turpis
        egestas maecenas pharetra convallis posuere morbi leo. Ac placerat
        vestibulum lectus mauris ultrices eros in. Sed blandit libero volutpat
        sed cras. Ut etiam sit amet nisl purus in mollis nunc. Dictumst
        vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras
        tincidunt. Ante metus dictum at tempor commodo. Neque sodales ut etiam
        sit amet nisl purus in mollis. Feugiat nisl pretium fusce id velit ut
        tortor. Gravida neque convallis a cras semper. Non arcu risus quis
        varius. Nulla facilisi cras fermentum odio eu. Vel facilisis volutpat
        est velit egestas dui id ornare. Non quam lacus suspendisse faucibus.
      </div>
      <Services />
      <TeamMembers employees={employees} />
      <ContactUs />
    </>
  );
}