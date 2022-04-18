import { Button, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TempĺateDefault from '../../src/templates/Default'


const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6)
  },
  buttonAdd: {
    margin: '30px auto',
    display: 'block'
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
    </TempĺateDefault>
  )
}
