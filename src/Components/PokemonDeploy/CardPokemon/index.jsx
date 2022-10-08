import { Card } from "antd";
const CardPokemon = ({ namePokemon }) => {
  return (
    <Card
      hoverable
      className="card-container"
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      {namePokemon}
    </Card>
  );
};

export default CardPokemon;
