import {
    Grid,
    Card,
    Paper,
    Container,
    IconButton,
    InputBase,
    Typography,
    CardActions,
    CardContent,
    CardMedia,
    Button
} from '@material-ui/core'
import TemplateDefault from '../src/templates/Default'
import SearchIcon from '@material-ui/icons/Search'

import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    searhContainer: {
        padding: theme.spacing(8, 10, 6)
    },
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0,2),
        marginTop: 20
    },
    cardMedia: {
        paddingTop: '56%'
    }
}))

const Home = () => {
    const classes = useStyles()

    return (
        <TemplateDefault>
            <Container maxWidth='md' className={classes.searhContainer}>
                <Typography component='h1' variant='h3' align='center' color='textPrimary'>
                    O que deseja encontrar?
                </Typography>
                <Paper className={classes.searchBox}>
                    <InputBase
                        placeholder='Ex.: Cadeira Gamer tecido'
                        fullWidth
                    />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Container>

            <Container maxWidth='md'>
                <Typography component='h2' variant='h4' align='center' color='textPrimary'>
                    Destaques
                </Typography>
                <br/>
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
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default Home