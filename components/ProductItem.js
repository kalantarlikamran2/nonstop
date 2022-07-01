import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Rating,
    Typography,
  } from '@mui/material';
  import NextLink from 'next/link';
  import React from 'react';
  import { urlForThumbnail } from '../utils/image';
   
  export default function ProductItem({ product, addToCartHandler }) {
    return (
      <Card sx={{ maxWidth: 220 }}>
        <NextLink href={`/product/${product.slug.current}`} passHref>
          <CardActionArea>
            <CardMedia 
              component="img"
              height="450"
              weight="90" 
              image={urlForThumbnail(product.image)}
              title={product.name}
            ></CardMedia>
            <CardContent>
              <Typography>{product.name}</Typography>
              <Typography>{product.rating} panel</Typography>
            </CardContent>
          </CardActionArea>
        </NextLink>
        <CardActions>
          <Typography>${product.price}</Typography> 
          <Button
            size="small"
            color="primary"
            onClick={() => addToCartHandler(product)}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    );
  }