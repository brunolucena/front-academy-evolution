import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

interface Props {
  color?: string;
  // liked: boolean;
  // onClick(): void;
}

export default function LikeButton({ // cria o componente LikeButton, que é uma função, e já exporta na mesma linha e também já abri o objeto do props
  color = "#0289ea", // peguei o parâmetro color do props e defini um valor default "#0289ea" caso o componente não receba ele
}: Props) { // Fechei o objeto do props, e defini o tipo dele como a interface Props, e abri a função
  const [liked, setLiked] = useState(false); // criei um state chamado liked, e peguei a função setLiked pra alterar o liked, e passei um valor default de false
  const [countClicks, setCountClicks] = useState(0);

  function onClick() { // criei uma função onClick
    setLiked(!liked); // inverte o valor do liked, se for false, vira true, se for true vira false
    setCountClicks(countClicks + 1);
  } // fecha a função

  return ( // retorna os elementos html do componente, usando o parêntesis pra querar linha
    <div>
      {liked ? ( // cria um if ternário com o valor do liked
        <FavoriteIcon onClick={onClick} style={{ color }} /> // se o valor for true, exibe esse ícone
      ) : ( // se for false, exibe o de baixo
        <FavoriteBorderIcon onClick={onClick} /> // Cria um arrow function anônimo (que faz o mesmo que a function onClick())
      )}

      {countClicks}
    </div>
  );
}
