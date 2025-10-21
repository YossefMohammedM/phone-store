  import RowOne from "./RowOne/RowOne";
  import RowTwo from "./RowTwo/RowTwo";
  import RowThree from "./RowThree/RowThree";

  const Header = () => {
    return (
      <>
        <div className="header py-2">
          <RowOne />
          <div className="line-in-header mt-2"></div>
          <RowTwo />
          <RowThree />
        </div>
      </>
    );
  };

  export default Header;
