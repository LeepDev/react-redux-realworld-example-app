import React from "react";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import "./css/cheader.css"

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding=".9rem"
      color="white"
      backgroundImage="url('/assets/buy/rectangle117.png')"
      width="100%"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Link to="/">  
            <div className="rectangle971"></div>
            <svg preserveAspectRatio="none" viewBox="5.922837257385254 9.728144645690918 41.1463623046875 34.5546875" className="platinumhomemortgageWhite1"><path d="M 42.01557159423828 13.10669422149658 C 43.99501037597656 11.64816188812256 44.64614105224609 11.70025253295898 44.64614105224609 11.46584510803223 C 44.64614105224609 11.33561897277832 44.5680046081543 11.23143863677979 44.43778228759766 11.23143863677979 C 44.43778228759766 11.23143863677979 44.4117317199707 11.23143863677979 44.4117317199707 11.23143863677979 C 43.94291687011719 11.23143863677979 42.4843864440918 12.03884029388428 41.44257736206055 12.84624195098877 C 38.70782852172852 11.67420673370361 35.76471710205078 11.07516670227051 32.79556655883789 11.04912185668945 C 30.68590354919434 11.04912185668945 28.57623863220215 11.25748252868652 26.49262046813965 11.67420673370361 C 25.60708427429199 10.89284992218018 24.53923034667969 10.34589958190918 23.39323997497559 10.08544731140137 C 19.53854751586914 9.095728874206543 16.04848480224609 10.4761266708374 16.04848480224609 10.4761266708374 C 8.755819320678711 12.92437648773193 6.229432106018066 19.87845230102539 6.229432106018066 19.87845230102539 C 5.760618209838867 21.02444267272949 5.968979358673096 21.33698463439941 5.968979358673096 21.33698463439941 C 6.281522274017334 21.41512107849121 6.646155834197998 20.19099426269531 6.646155834197998 20.19099426269531 C 8.078642845153809 16.80511665344238 9.823673248291016 15.26844787597656 9.823673248291016 15.26844787597656 C 16.15266418457031 8.470643043518066 23.52346420288086 10.86680507659912 23.52346420288086 10.86680507659912 C 24.27877616882324 11.02307605743408 24.98199653625488 11.38770866394043 25.5810375213623 11.88256931304932 C 15.42339706420898 14.33081912994385 9.719491958618164 21.72766304016113 9.719491958618164 27.3273868560791 C 9.719491958618164 31.05185508728027 12.53237724304199 33.10942840576172 15.37130737304688 32.79688262939453 C 16.36102676391602 32.69270324707031 17.35074424743652 32.5103874206543 18.28837394714355 32.22389221191406 L 18.28837394714355 41.88667297363281 C 16.51729774475098 43.08475112915039 14.43367958068848 43.73588562011719 12.29796981811523 43.70983505249023 C 11.07384490966797 43.70983505249023 9.276723861694336 42.95452499389648 9.276723861694336 41.86062622070312 C 9.276723861694336 41.52203750610352 9.927854537963867 40.87090301513672 9.927854537963867 40.24581909179688 C 9.927854537963867 39.07378387451172 9.302769660949707 38.37056732177734 8.234914779663086 38.37056732177734 C 6.776381969451904 38.37056732177734 6.255477428436279 39.36028289794922 6.255477428436279 40.68859100341797 C 6.255477428436279 42.43361663818359 8.339096069335938 44.28283309936523 12.19378852844238 44.28283309936523 C 14.27740669250488 44.28283309936523 16.33498191833496 43.63169860839844 18.28837394714355 42.58988952636719 L 18.28837394714355 43.55356216430664 L 21.72634315490723 43.55356216430664 L 21.72634315490723 40.32395553588867 C 23.83600616455078 38.6049690246582 25.76335144042969 36.6776237487793 27.43024826049805 34.54191589355469 L 27.43024826049805 43.55356216430664 L 31.70166397094727 43.55356216430664 L 31.70166397094727 30.94767189025879 L 29.98267936706543 30.94767189025879 C 30.29522323608398 30.45281219482422 30.55567359924316 29.98399925231934 30.81612586975098 29.56727409362793 C 31.96211624145508 27.45761108398438 32.92578887939453 25.63444519042969 33.81132507324219 23.99359703063965 L 37.30138778686523 26.72834396362305 L 37.30138778686523 28.81196403503418 C 37.22325134277344 28.81196403503418 37.14511489868164 28.81196403503418 37.04093170166016 28.81196403503418 C 34.54059219360352 28.81196403503418 34.12387084960938 27.58783912658691 33.88946151733398 27.58783912658691 C 33.70714569091797 27.61388397216797 33.57691955566406 27.74411010742188 33.55087280273438 27.92642784118652 C 33.55087280273438 28.10874176025391 34.80104446411133 29.41100311279297 37.30138778686523 29.56727600097656 L 37.30138778686523 43.60565185546875 L 40.76539993286133 43.60565185546875 L 40.76539993286133 29.02032661437988 C 44.25545883178711 27.79620170593262 47.06834411621094 24.54055023193359 47.06834411621094 20.71190071105957 C 47.12043762207031 17.50833702087402 44.75032043457031 14.53918170928955 42.01557159423828 13.10669422149658 Z M 32.56115341186523 11.59607124328613 C 35.29590225219727 11.59607124328613 38.239013671875 12.06488418579102 40.68726348876953 13.28901100158691 C 38.1608772277832 15.06008625030518 35.89494323730469 17.16975021362305 33.9936408996582 19.59195518493652 L 29.48781967163086 15.81539630889893 L 28.68041801452637 16.51861763000488 C 28.65437316894531 16.0498046875 28.60228157043457 15.60703563690186 28.52414703369141 15.13822174072266 C 28.49810218811035 15.00799560546875 28.08137702941895 13.15878391265869 26.9614315032959 12.14302062988281 C 28.81064414978027 11.77838802337646 30.68589973449707 11.59607124328613 32.56115341186523 11.59607124328613 Z M 14.17322540283203 31.88530349731445 C 11.38638687133789 31.91134643554688 10.2924861907959 29.17659950256348 10.2924861907959 27.19716262817383 C 10.31853294372559 22.14438819885254 16.02243804931641 14.66940879821777 26.04985046386719 12.32533836364746 C 26.80516052246094 13.2369213104248 27.2479305267334 14.33082103729248 27.35211181640625 15.50285625457764 C 27.3781566619873 16.23212242126465 27.3260669708252 16.98743438720703 27.22188568115234 17.71669960021973 L 18.28837394714355 25.34794998168945 L 18.28837394714355 30.89558219909668 C 17.01215553283691 31.52066612243652 15.60571479797363 31.85925483703613 14.17322540283203 31.88530349731445 L 14.17322540283203 31.88530349731445 Z M 25.00804138183594 24.20196151733398 C 24.12250328063965 25.76467514038086 23.02860450744629 27.19716262817383 21.75238800048828 28.44733428955078 L 21.75238800048828 26.83252906799316 L 25.00804138183594 24.20196151733398 Z M 21.75238800048828 38.63101577758789 L 21.75238800048828 30.7132682800293 C 25.42476463317871 28.49942207336426 27.27397537231445 24.93122863769531 28.107421875 21.67557334899902 L 29.48781967163086 20.55562973022461 L 31.85793495178223 22.40483856201172 C 27.89906311035156 28.16083526611328 25.19035911560059 34.38564300537109 21.75238800048828 38.63101577758789 Z M 40.79144668579102 27.43156623840332 L 40.79144668579102 25.3219051361084 L 35.53031158447266 20.89421653747559 C 37.22325134277344 17.97714996337891 38.83805465698242 15.7633056640625 41.33839797973633 13.54946327209473 C 43.60433197021484 15.00799560546875 44.46382522583008 16.72698020935059 44.46382522583008 19.40963745117188 C 44.46382141113281 22.06625175476074 43.16156005859375 25.55631256103516 40.79144668579102 27.43156623840332 L 40.79144668579102 27.43156623840332 Z"  /></svg>
        </Link>
      </Flex>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="left"
        flexGrow={1}
      >
        <div className="rectangle851"></div>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Link to="/buy" className="buyC">
            Buy
        </Link>
        <Link to="/refi" className="refiC">
            Refi
        </Link>
        <a href="http://blog.phmc.com/" className="blogC">
            Blog
        </a>
        <Link to="/contact" className="contactC">
            Contact
        </Link>
        <Link to="/locations" className="locationsC">
            Locations
        </Link>
        <Link to="/careers" className="careersC">
            Careers
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
