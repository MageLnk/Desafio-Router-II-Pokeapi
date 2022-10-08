import { Card } from "antd";
const CardPokemon = ({ namePokemon }) => {
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      {namePokemon}
    </Card>
  );
};

export default CardPokemon;
