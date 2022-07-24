import React, { memo } from 'react';
import IProduct from '../../../types/product';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Typography from '@mui/material/Typography';

import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';

interface IProps {
  product: IProduct;
  inclementTotal?: () => void;
  mostExpensive?: boolean;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Product({ product, inclementTotal, mostExpensive }: IProps) {
  const { title, price, category, image } = product;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={image}
        alt="Paella dish"
      />
        <Divider />
      <CardContent>
        <Typography variant="subtitle1" color="text.primary">{title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <AddIcon />
          <RemoveIcon></RemoveIcon>
        </ExpandMore>
      </CardActions>
      {inclementTotal && <Button variant="contained" endIcon={<AddShoppingCartIcon />} onClick={inclementTotal}>Adicionar produto</Button>}
    </Card>
  );
}

export default memo(Product);
