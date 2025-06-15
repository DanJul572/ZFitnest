import Svg, { Path, SvgProps } from 'react-native-svg';

const UserIcon = (props: SvgProps) => (
  <Svg width={16} height={20} fill="none" {...props}>
    <Path
      stroke="#ADA4A5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M7.985 13.346c-3.868 0-7.17.585-7.17 2.927s3.281 2.948 7.17 2.948c3.867 0 7.17-.586 7.17-2.927s-3.282-2.948-7.17-2.948ZM7.985 10.006A4.596 4.596 0 1 0 3.389 5.41a4.58 4.58 0 0 0 4.563 4.596h.033Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default UserIcon;
