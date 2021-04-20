const Answers = (props) => {
  const { secName, secVal } = props;
  console.log({ secName }, " : ", { secVal });
  switch (secName) {
    case "section":
      return (
        <div>
          <h3>Your answers: </h3>
        </div>
      );
    case "section10":
      return (
        <div>
          <p> Name : {secVal}</p>
        </div>
      );
    case "section11":
      return (
        <div>
          <p> Graduate from school : {secVal}</p>
        </div>
      );
    case "section12":
      return (
        <div>
          <p> Direction of study : {secVal}</p>
        </div>
      );
    case "section20VGIK":
      return <div>You choose: VGIK</div>;

    case "section20Stroganov":
      return <div>You choose: Stroganov</div>;

    case "section21BMSTU":
      return <div>You choose: BMSTU</div>;

    case "section21MFTI":
      return <div>You choose: MFTI</div>;

    case "section22":
      return (
        <div>
          <p>Your comments:</p>
          <p>{secVal}</p>
        </div>
      );

    case "section30":
      return (
        <div>
          <p> Fuculties: </p>
          {secVal.map((point, index) => (
            <div key={index}>{point}</div>
          ))}
        </div>
      );

    case "section31":
      return (
        <div>
          <p> Fuculties: </p>
          {secVal.map((point, index) => (
            <div key={index}>{point}</div>
          ))}
        </div>
      );
    case "section32":
      return (
        <div>
          <p> Fuculties: </p>
          {secVal.map((point, index) => (
            <div key={index}>{point}</div>
          ))}
        </div>
      );

    case "section33":
      return (
        <div>
          <p> Fuculties: </p>
          {secVal.map((point, index) => (
            <div key={index}>{point}</div>
          ))}
        </div>
      );

    case "section40":
      return (
        <div>
          <p>Date of visit: {secVal}</p>
        </div>
      );

    case "section41":
      return (
        <div>
          Your photo:
          <img src={"data:" + secVal} alt="loaded img"></img>
        </div>
      );

    default:
      return (
        <div>
          {" "}
          Nothing here for {secName} : {secVal}{" "}
        </div>
      );
  }
};
export default Answers;
