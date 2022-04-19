import { 
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import TempĺateDefault from '../../src/templates/Default'


const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6)
  },
  buttonAdd: {
    margin: '30px auto',
    display: 'block'
  },
  cardMedia: {
    paddingTop: '56%'
  }
}))

export default function Home() {
  const classes = useStyles()

  return (
    <TempĺateDefault>
      <Container maxWidth='sm' className={classes.container}>
        <Typography component='h1' variant='h2' align='center'>
          MEUS ANÚNCIOS
        </Typography>
        <Button variant='contained' color='primary' className={classes.buttonAdd}>
          Adicionar novo anúncio
        </Button>
      </Container>

      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/random'}
              title='Título da Imagem'
              />
              
              <CardContent>
                <Typography variant='h5' component='h3'>
                  Produto X
                </Typography>
                <Typography>
                  Preço: R$59,90
                </Typography>
              </CardContent>

              <CardActions>
                <Button size='small' color='primary'>
                  Editar
                </Button>
                <Button size='small' color='primary'>
                  Deletar
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card>
            <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/random'}
              title='Título da Imagem'
              />
              
              <CardContent>
                <Typography variant='h5' component='h2'>
                  Produto X
                </Typography>
                <Typography>
                  Preço: R$59,90
                </Typography>
              </CardContent>

              <CardActions>
                <Button size='small' color='primary'>
                  Editar
                </Button>
                <Button size='small' color='primary'>
                  Deletar
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card>
            <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/random'}
              title='Título da Imagem'
              />
              
              <CardContent>
                <Typography variant='h5' component='h2'>
                  Produto X
                </Typography>
                <Typography>
                  Preço: R$59,90
                </Typography>
              </CardContent>

              <CardActions>
                <Button size='small' color='primary'>
                  Editar
                </Button>
                <Button size='small' color='primary'>
                  Deletar
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card>
            <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/random'}
              title='Título da Imagem'
              />
              
              <CardContent>
                <Typography variant='h5' component='h2'>
                  Produto X
                </Typography>
                <Typography>
                  Preço: R$59,90
                </Typography>
              </CardContent>

              <CardActions>
                <Button size='small' color='primary'>
                  Editar
                </Button>
                <Button size='small' color='primary'>
                  Deletar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </TempĺateDefault>
  )
}
