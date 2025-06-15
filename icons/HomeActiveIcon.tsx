import Svg, {
  Defs,
  LinearGradient,
  Path,
  Stop,
  SvgProps,
} from 'react-native-svg';

const HomeActiveIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="url(#a)"
      fillRule="evenodd"
      d="M7.157 18.771v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.433.636 1.433 1.42v3.076c0 .662.534 1.204 1.203 1.219h1.924c1.918 0 3.473-1.54 3.473-3.438V7.838a2.44 2.44 0 0 0-.962-1.905L11.958.685a3.18 3.18 0 0 0-3.945 0L1.462 5.943A2.42 2.42 0 0 0 .5 7.847v8.715C.5 18.46 2.055 20 3.973 20h1.924c.685 0 1.241-.55 1.241-1.229"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={19.5}
        x2={-5.838}
        y1={20}
        y2={18.137}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default HomeActiveIcon;
