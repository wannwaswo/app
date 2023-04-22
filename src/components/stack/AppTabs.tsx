import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Routes } from "./Routes";
import TrendingScreen from "../screens/TrendingScreen";
import MusicScreen from "../screens/MusicScreen";
import FashionScreen from "../screens/FashionScreen";
import FilmScreen from "../screens/FilmScreen";
import NightlifeScreen from "../screens/NightlifeScreen";
import { TouchableHighlight, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  const navigate = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName={Routes.TABS.TRENDING}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#000000",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          title: "Musik",
          tabBarIcon: (props) => (
            <Svg width="25" height="25" viewBox="0 0 25 25" fill={props.color}>
              <Path
                d="M24.4613 1.08918C24.3714 1.0256 24.2667 0.981439 24.1551 0.960043C24.0436 0.938647 23.9281 0.940582 23.8175 0.965701L7.8175 4.5907C7.65536 4.62756 7.51146 4.71246 7.40864 4.83191C7.30583 4.95135 7.24999 5.09851 7.25 5.25V18.1765C6.51154 17.6086 5.58118 17.2862 4.61298 17.2629C3.64477 17.2396 2.69682 17.5166 1.9261 18.0482C1.15538 18.5798 0.608132 19.334 0.374981 20.1859C0.141829 21.0379 0.236762 21.9364 0.644058 22.7328C1.05135 23.5291 1.74658 24.1755 2.6146 24.5649C3.48262 24.9543 4.47137 25.0633 5.41709 24.8739C6.36282 24.6845 7.20879 24.2081 7.81491 23.5234C8.42103 22.8388 8.75094 21.9871 8.75 21.1094V5.78015L23.25 2.495V14.5515C22.5115 13.9836 21.5812 13.6612 20.613 13.6379C19.6448 13.6146 18.6968 13.8916 17.9261 14.4232C17.1554 14.9548 16.6081 15.709 16.375 16.5609C16.1418 17.4129 16.2368 18.3114 16.6441 19.1078C17.0514 19.9041 17.7466 20.5505 18.6146 20.9399C19.4826 21.3293 20.4714 21.4383 21.4171 21.2489C22.3628 21.0595 23.2088 20.5831 23.8149 19.8984C24.421 19.2138 24.7509 18.3621 24.75 17.4844V1.625C24.75 1.52167 24.724 1.41971 24.6739 1.32686C24.6239 1.23401 24.5512 1.15272 24.4613 1.08918ZM4.5 23.6016C3.9561 23.6016 3.42442 23.4554 2.97218 23.1816C2.51995 22.9077 2.16747 22.5185 1.95933 22.0631C1.75119 21.6077 1.69673 21.1066 1.80284 20.6232C1.90895 20.1397 2.17086 19.6957 2.55546 19.3471C2.94005 18.9986 3.43006 18.7612 3.9635 18.6651C4.49695 18.5689 5.04988 18.6183 5.55238 18.8069C6.05488 18.9955 6.48437 19.3149 6.78654 19.7248C7.08872 20.1346 7.25 20.6165 7.25 21.1094C7.25 21.7703 6.96027 22.4042 6.44455 22.8716C5.92882 23.339 5.22935 23.6016 4.5 23.6016ZM20.5 19.9766C19.9561 19.9766 19.4244 19.8304 18.9722 19.5566C18.5199 19.2827 18.1675 18.8935 17.9593 18.4381C17.7512 17.9827 17.6967 17.4816 17.8028 16.9982C17.909 16.5147 18.1709 16.0707 18.5555 15.7221C18.9401 15.3736 19.4301 15.1362 19.9635 15.0401C20.497 14.9439 21.0499 14.9933 21.5524 15.1819C22.0549 15.3705 22.4844 15.6899 22.7865 16.0998C23.0887 16.5096 23.25 16.9915 23.25 17.4844C23.25 18.1453 22.9603 18.7792 22.4445 19.2466C21.9288 19.714 21.2293 19.9766 20.5 19.9766Z"
                fill="#9B9999"
              />
            </Svg>
          ),
        }}
        name={Routes.TABS.MUSIC}
        component={MusicScreen}
      />
      <Tab.Screen
        options={{
          title: "Film",
          tabBarIcon: (props) => (
            <Svg width="25" height="29" viewBox="0 0 25 29" fill={props.color}>
              <Path
                d="M18.1841 2.51089L18.1841 2.51094C18.7961 2.47059 19.4063 2.61269 19.9375 2.91926C20.4687 3.22581 20.897 3.68302 21.1683 4.23307C21.1683 4.2331 21.1683 4.23313 21.1684 4.23316L18.1841 2.51089ZM18.1841 2.51089L18.1809 2.51121M18.1841 2.51089L18.1809 2.51121M18.1809 2.51121C17.945 2.5344 17.7117 2.57832 17.4836 2.64246L17.4193 2.66054M18.1809 2.51121L17.4193 2.66054M17.4193 2.66054L17.4114 2.72688M17.4193 2.66054L17.4114 2.72688M17.4114 2.72688L16.8167 7.71355L16.7992 7.86024M17.4114 2.72688L16.7992 7.86024M16.7992 7.86024L16.9419 7.82198M16.7992 7.86024L16.9419 7.82198M16.9419 7.82198L21.0992 6.70733L16.9419 7.82198ZM6.55528 10.6045L6.48986 10.622L3.06853 11.538L2.97132 11.564L2.94591 11.4666C2.75521 10.7359 2.61559 10.1617 2.53081 9.67454L2.5308 9.67444C2.41494 9.00488 2.42345 8.59268 2.51404 8.25296L2.51407 8.25287C2.65462 7.72786 2.93155 7.24847 3.31583 6.86281L3.31616 6.86248C3.56521 6.61484 3.9189 6.40063 4.55751 6.1662L6.55528 10.6045ZM6.55528 10.6045L6.5633 10.5372M6.55528 10.6045L6.5633 10.5372M6.5633 10.5372L7.15796 5.54656L7.17544 5.39989M6.5633 10.5372L7.17544 5.39989M7.17544 5.39989L7.03278 5.43814M7.17544 5.39989L7.03278 5.43814M7.03278 5.43814C5.94477 5.72978 5.16132 5.94431 4.55754 6.16618L7.03278 5.43814ZM14.8605 8.37799L14.9259 8.36047L14.934 8.29325L15.53 3.30258L15.5475 3.15591L15.4048 3.19413L9.11279 4.87946L9.04738 4.89699L9.03937 4.96423L8.4447 9.95489L8.42723 10.1015L8.56988 10.0633L14.8605 8.37799ZM1.43333 12.7907V12.7776L1.42992 12.7648C1.1282 11.6394 0.886935 10.7336 0.757211 9.98172L0.757198 9.98165C0.619721 9.18851 0.588571 8.48347 0.775255 7.78729L0.775264 7.78726C0.997686 6.95655 1.43481 6.19901 2.04273 5.59075L1.972 5.52006L2.04262 5.59086C2.55356 5.08122 3.17984 4.75414 3.9358 4.4766C4.66931 4.20783 5.60431 3.95707 6.76989 3.64465L6.77 3.64462L7.81 3.36462L7.81951 3.36206L7.82834 3.35769C7.93544 3.30471 8.05206 3.27372 8.17134 3.26655L8.18144 3.26594L8.19121 3.26332L16.1539 1.12999L16.1539 1.13L16.1555 1.12954L16.1835 1.12154L16.1922 1.11905L16.2003 1.11502C16.3074 1.06204 16.4241 1.03105 16.5433 1.02388L16.5533 1.02328L16.563 1.0207C17.196 0.85245 17.6497 0.743096 18.0667 0.7145C19.0339 0.651099 19.9982 0.875965 20.8375 1.36066C21.6769 1.84538 22.3537 2.56817 22.7823 3.4376L22.7823 3.43768C22.9956 3.86946 23.1371 4.39707 23.3487 5.18985L23.3489 5.19047L23.3792 5.3013L23.3796 5.30247L23.3952 5.36263L23.3955 5.3637C23.46 5.6 23.5224 5.83445 23.5376 6.05623C23.5663 6.497 23.4637 6.93639 23.2427 7.31885C23.022 7.70092 22.693 8.00903 22.2973 8.20429C22.0637 8.30974 21.8198 8.39043 21.5694 8.44502L21.5693 8.44491L21.5648 8.44613L9.90346 11.5701L9.92933 11.7667H18.4027C19.6025 11.7667 20.5948 11.7669 21.3787 11.8725L21.3787 11.8725C22.205 11.983 22.9363 12.2258 23.5213 12.8108C24.1076 13.3971 24.3504 14.1285 24.4609 14.9533L24.4609 14.9534C24.5665 15.7386 24.5667 16.7309 24.5667 17.9307V19.4067C24.5667 21.232 24.5665 22.6949 24.4116 23.8427L24.4115 23.8428C24.253 25.0316 23.9116 26.0176 23.1307 26.7986C22.3497 27.5783 21.3636 27.9184 20.1747 28.0783L20.1746 28.0783C19.0281 28.2332 17.5653 28.2334 15.74 28.2334H10.26C8.43338 28.2334 6.97185 28.2332 5.82404 28.0783L5.82388 28.0783C4.63511 27.9198 3.64901 27.5784 2.86799 26.7986C2.08711 26.0177 1.7483 25.0318 1.58711 23.8427C1.43354 22.6948 1.43333 21.2319 1.43333 19.4067V12.7907ZM3.33333 13.5667H3.23333V13.6667V19.3334C3.23333 21.2438 3.23445 22.5865 3.37157 23.6028C3.50509 24.5927 3.75171 25.1344 4.14116 25.5253L4.14129 25.5254C4.53227 25.9164 5.0742 26.1617 6.06397 26.2952L6.06407 26.2952C7.07892 26.4309 8.42149 26.4334 10.3333 26.4334H15.6667C17.5772 26.4334 18.9197 26.4309 19.9359 26.2952L19.9361 26.2952C20.9246 26.1616 21.4677 25.915 21.8586 25.5256L21.8587 25.5254C22.2497 25.1344 22.4949 24.5925 22.6284 23.6014L22.6285 23.6013C22.7642 22.5865 22.7667 21.2439 22.7667 19.3334V18.0001C22.7667 16.7176 22.7642 15.8456 22.6764 15.1934C22.5923 14.568 22.4445 14.2791 22.248 14.084C22.0531 13.8891 21.7659 13.7411 21.1388 13.6556L21.1387 13.6556C20.4864 13.5678 19.6157 13.5667 18.3333 13.5667H3.33333ZM2.62932 9.65739L2.62931 9.6574L2.62932 9.65739Z"
                fill="#9B9999"
                stroke="#121212"
                stroke-width="0.2"
              />
            </Svg>
          ),
        }}
        name={Routes.TABS.FILM}
        component={FilmScreen}
      />
      <Tab.Screen
        options={{
          title: "Trending",
          tabBarIcon: (props) => (
            <Svg width="21" height="27" viewBox="0 0 21 27" fill={props.color}>
              <Path
                d="M17.1062 10.9961C17.6156 11.6257 18.0585 12.4444 18.3942 13.3764C18.8739 14.708 19.0988 16.1728 19.0242 17.4413C18.9511 18.685 18.4342 20.6313 17.1245 22.2937C15.8425 23.921 13.7718 25.3179 10.467 25.5015C7.15528 25.6855 4.90383 24.5452 3.42786 22.967C1.92317 21.358 1.17026 19.232 1.019 17.417C0.869427 15.622 1.53145 11.6183 4.62246 9.3C6.8134 7.6568 7.82673 5.77921 8.1895 4.01377C8.32558 3.3515 8.3678 2.71668 8.35297 2.12971C10.9966 4.44337 11.4682 7.54653 11.8232 9.88281C11.8952 10.3564 11.9624 10.7985 12.0419 11.1961C12.2639 12.3062 12.7903 13.2577 13.8258 13.4247C14.2816 13.4983 14.6886 13.3807 14.9868 13.2381C15.2875 13.0943 15.5406 12.8961 15.7296 12.7071L15.7688 12.668L15.8034 12.6247L17.1062 10.9961Z"
                stroke="#F5F5F5"
                stroke-width="2"
              />
            </Svg>
          ),
          headerLeft: () => (
            <TouchableHighlight
              onPress={() => navigate.navigate(Routes.SETTINGS.ROOT)}
              style={{ padding: 5 }}
            >
              <View>
                <Svg
                  fill="#000000"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  height={28}
                  width={28}
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </Svg>
              </View>
            </TouchableHighlight>
          ),
        }}
        name={Routes.TABS.TRENDING}
        component={TrendingScreen}
      />
      <Tab.Screen
        options={{
          title: "Fashion",
          tabBarIcon: (props) => (
            <Svg width="32" height="21" viewBox="0 0 32 21" fill={props.color}>
              <Path
                d="M31.0155 16.8373C30.8518 16.4108 30.5299 16.0526 30.0838 15.8018L16.3388 8.06736V6.85447C17.8221 6.70094 18.9779 5.558 18.9779 4.17283C18.9779 2.6853 17.6414 1.47412 16 1.47412C14.3586 1.47412 13.0221 2.6853 13.0221 4.17283C13.0221 4.34171 13.1746 4.47989 13.3609 4.47989C13.5473 4.47989 13.6998 4.34171 13.6998 4.17283C13.6998 3.02306 14.7313 2.08824 16 2.08824C17.2687 2.08824 18.3002 3.02306 18.3002 4.17283C18.3002 5.32259 17.2687 6.25741 16 6.25741C15.8136 6.25741 15.6612 6.39559 15.6612 6.56447V8.06736L1.91623 15.8035C1.472 16.0543 1.15011 16.4108 0.984466 16.839C0.83576 17.2262 0.824466 17.6612 0.950583 18.0672C1.07858 18.4732 1.34211 18.8366 1.69411 19.0942C2.08188 19.3774 2.56376 19.5275 3.08705 19.5275H28.9129C29.4362 19.5275 29.9181 19.3774 30.3059 19.0942C30.6579 18.8366 30.9214 18.4715 31.0494 18.0672C31.1755 17.6612 31.1642 17.2245 31.0155 16.8373ZM30.3962 17.8967C30.2494 18.3658 29.7713 18.9116 28.9111 18.9116H3.08705C2.22682 18.9116 1.75058 18.3641 1.60188 17.8967C1.45317 17.4292 1.54164 16.7349 2.27199 16.3238L16 8.59959L29.7261 16.3255C30.4565 16.7366 30.5449 17.4292 30.3962 17.8967Z"
                fill="#9B9999"
                stroke="#9B9999"
              />
            </Svg>
          ),
        }}
        name={Routes.TABS.FASHION}
        component={FashionScreen}
      />
      <Tab.Screen
        options={{
          title: "Nightlife",
          tabBarIcon: (props) => (
            <Svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill={props.color}
            >
              <Path
                d="M14.935 12.8573C15.1966 13.5819 15.7202 14.2053 16.4213 14.6266C17.1223 15.048 17.9597 15.2426 18.798 15.1791L21.255 22.0014L18.715 22.7536C18.6103 22.7833 18.5133 22.8317 18.4297 22.896C18.3461 22.9603 18.2775 23.0391 18.2281 23.1279C18.1787 23.2166 18.1494 23.3134 18.142 23.4125C18.1346 23.5117 18.1492 23.6112 18.185 23.7051C18.325 24.1039 18.795 24.3214 19.235 24.1855L25.925 22.2098C26.0296 22.1801 26.1267 22.1317 26.2103 22.0674C26.2939 22.0031 26.3625 21.9243 26.4119 21.8356C26.4613 21.7468 26.4906 21.65 26.498 21.5509C26.5054 21.4517 26.4908 21.3522 26.455 21.2583C26.4232 21.1637 26.3708 21.0758 26.301 20.9997C26.2312 20.9237 26.1454 20.861 26.0485 20.8155C25.9516 20.7699 25.8457 20.7423 25.7369 20.7343C25.6282 20.7263 25.5187 20.7381 25.415 20.7689L22.875 21.5211L20.419 14.7025C21.1403 14.3062 21.6926 13.7005 21.986 12.9838C22.2793 12.2671 22.2966 11.4816 22.035 10.7548L18.605 1.22108C18.5499 1.07133 18.4318 0.947334 18.2764 0.87606C18.121 0.804785 17.9408 0.791989 17.775 0.840454L11.925 2.57139C11.585 2.67108 11.395 3.00639 11.505 3.32358L11.628 3.66614L8.725 2.80702C8.55922 2.75855 8.37904 2.77135 8.22362 2.84262C8.06819 2.9139 7.9501 3.03789 7.895 3.18764L4.465 12.7214C4.20328 13.448 4.22041 14.2335 4.51361 14.9502C4.80681 15.6669 5.35885 16.2726 6.08 16.669L3.625 23.4876L1.085 22.7355C0.655 22.6086 0.195 22.8261 0.0450001 23.2248C-0.105 23.6236 0.135 24.0495 0.575 24.1764L7.265 26.152C7.36867 26.1844 7.47845 26.1977 7.58787 26.191C7.69728 26.1843 7.8041 26.1577 7.902 26.1129C7.9999 26.0682 8.08689 26.006 8.15783 25.9303C8.22877 25.8545 8.28222 25.7665 8.315 25.6717C8.35077 25.5778 8.36539 25.4783 8.35799 25.3791C8.35058 25.2799 8.32131 25.1831 8.27189 25.0944C8.22247 25.0057 8.15392 24.9269 8.07029 24.8626C7.98666 24.7983 7.88965 24.7499 7.785 24.7201L5.245 23.968L7.702 17.1466C8.54041 17.2101 9.37791 17.0152 10.079 16.5937C10.78 16.1722 11.3036 15.5486 11.565 14.8239L13.604 9.15711L14.935 12.8573ZM15.125 5.88827C16.205 6.71295 17.595 7.12077 19.005 7.03921C19.535 7.01202 20.015 7.30202 20.175 7.7642L21.215 10.6461C21.725 12.0598 20.865 13.5914 19.295 14.0626C17.725 14.5248 16.035 13.7455 15.515 12.3226L13.215 5.91545C13.005 5.32639 13.775 4.85514 14.295 5.25389L15.125 5.88827ZM14.805 4.24795C14.696 4.24795 14.5881 4.2285 14.4874 4.1907C14.3867 4.1529 14.2952 4.09749 14.2181 4.02764C14.141 3.9578 14.0799 3.87488 14.0382 3.78362C13.9965 3.69236 13.975 3.59455 13.975 3.49577C13.975 3.39699 13.9965 3.29918 14.0382 3.20792C14.0799 3.11666 14.141 3.03374 14.2181 2.96389C14.2952 2.89404 14.3867 2.83864 14.4874 2.80084C14.5881 2.76304 14.696 2.74358 14.805 2.74358C15.0251 2.74358 15.2362 2.82283 15.3919 2.96389C15.5476 3.10495 15.635 3.29627 15.635 3.49577C15.635 3.69526 15.5476 3.88658 15.3919 4.02764C15.2362 4.16871 15.0251 4.24795 14.805 4.24795ZM16.635 5.9517C16.4865 5.9517 16.344 5.89824 16.239 5.80306C16.134 5.70789 16.075 5.5788 16.075 5.4442C16.075 5.30961 16.134 5.18052 16.239 5.08535C16.344 4.99017 16.4865 4.93671 16.635 4.93671C16.7835 4.93671 16.926 4.99017 17.031 5.08535C17.136 5.18052 17.195 5.30961 17.195 5.4442C17.195 5.5788 17.136 5.70789 17.031 5.80306C16.926 5.89824 16.7835 5.9517 16.635 5.9517ZM17.195 3.49577C17.195 3.57508 17.1602 3.65115 17.0983 3.70724C17.0365 3.76332 16.9525 3.79483 16.865 3.79483C16.7775 3.79483 16.6935 3.76332 16.6317 3.70724C16.5698 3.65115 16.535 3.57508 16.535 3.49577C16.535 3.41645 16.5698 3.34038 16.6317 3.2843C16.6935 3.22821 16.7775 3.1967 16.865 3.1967C16.9525 3.1967 17.0365 3.22821 17.0983 3.2843C17.1602 3.34038 17.195 3.41645 17.195 3.49577ZM10.985 14.2892C10.7361 14.9728 10.1989 15.5393 9.49076 15.8653C8.7826 16.1913 7.96091 16.2502 7.205 16.0292C6.45074 15.8036 5.82555 15.3168 5.46585 14.6751C5.10614 14.0333 5.04113 13.2886 5.285 12.6036L6.485 9.27764C6.555 9.07827 6.755 8.94233 6.985 8.94233L12.185 8.86077C12.555 8.86077 12.815 9.18702 12.705 9.5042L10.985 14.2892Z"
                fill="#9B9999"
              />
            </Svg>
          ),
        }}
        name={Routes.TABS.NIGHTLIFE}
        component={NightlifeScreen}
      />
    </Tab.Navigator>
  );
}
