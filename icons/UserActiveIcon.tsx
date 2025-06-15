import Svg, {
  Defs,
  LinearGradient,
  Path,
  Stop,
  SvgProps,
} from 'react-native-svg';

const UserActiveIcon = (props: SvgProps) => (
  <Svg width={16} height={20} fill="none" {...props}>
    <Path
      fill="url(#a)"
      fillRule="evenodd"
      d="M13.294 5.291A5.274 5.274 0 0 1 8 10.583a5.275 5.275 0 0 1-5.294-5.292A5.274 5.274 0 0 1 8 0a5.273 5.273 0 0 1 5.294 5.291ZM8 20c-4.338 0-8-.705-8-3.425 0-2.721 3.685-3.401 8-3.401 4.339 0 8 .705 8 3.425C16 19.32 12.315 20 8 20Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={16}
        x2={-5.37}
        y1={20}
        y2={18.677}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default UserActiveIcon;
