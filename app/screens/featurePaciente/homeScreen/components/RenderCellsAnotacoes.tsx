import { RenderCellsAnotacoesProps } from "@/constants/types/RenderCellsAnotacoesProps";
import { ScrollView } from "react-native";
import CustomAnotacaoCell from "./CustomAnotacaoCell";

const RenderCellsAnotacoes: React.FC<RenderCellsAnotacoesProps> = ({ anotacoes }) => {
    return (
      <ScrollView>
        {anotacoes.map((anotacao) => (
          <CustomAnotacaoCell
            key={anotacao.idAnotacao}
            anotacao={anotacao}
            onPress={() => console.log("TODO")}
          />
        ))}
      </ScrollView>
    );
}


export default RenderCellsAnotacoes;
