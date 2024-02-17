// import { xmark } from "../../assets";
// import Container from "./Container";
// import FlexBox from "./FlexBox";
// import SvgIcon from "./SvgIcon";

// const FixedPopupPageContainer = ({
//   children,
//   popupHeading = "",
//   containerMaxWidth,
// }) => {
//   return (
//     <FlexBox className="fixed top-0 left-0 w-full h-full bg-white/50 backdrop-blur-sm z-30 overflow-auto">
//       <Container maxWidth={containerMaxWidth}>
//         <FlexBox direction="flex-col">
//           <FlexBox
//             justifyItems="justify-between"
//             className={"border-b w-full py-2"}
//           >
//             <p className="flex-1 text-center text-2xl">{popupHeading}</p>
//             <SvgIcon children={xmark} />
//           </FlexBox>
//           {children}
//         </FlexBox>
//       </Container>
//     </FlexBox>
//   );
// };

// export default FixedPopupPageContainer;
