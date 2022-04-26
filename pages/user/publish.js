import { useState } from 'react'
import {
    Container,
    Typography,
    Box,
    TextField,
    Select,
    Button,
    IconButton
} from '@material-ui/core'

import { useDropzone } from 'react-dropzone'
import TemplateDefault from '../../src/templates/Default'
import { makeStyles } from '@material-ui/core/styles'
import { DeleteForever } from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
    mask: {},
    mainImage: {},
    container: {
        padding: theme.spacing(8, 0, 6)
      },
      boxContainer: {
        paddingBottom: theme.spacing(3)
      },
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        borderRadius: '5px'
    },
    thumbsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 15
    },
    thumb: {
        position: 'relative',
        width: 200,
        height: 150,
        backgourdSize: 'cover',
        margin: '0 15px 15px 0',
        backgroundPosition: 'center center',

        '& $mainImage': {
            backgroundColor: 'blue',
            padding: '6px 10px',
            position: 'absolute',
            bottom: 0,
            left: 0,
            borderRadius: '0 10px 0 0'
        },

        '&:hover $mask': {
            display: 'flex'
        },

        '& $mask': {
            display: 'none',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        }
    },
    dropzone: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddin: 10,
        margin: '0 15px 15px 0',
        width: 200,
        height: 150,
        background: theme.palette.background.default,
        border: '2px dashed black'
    }
}))
  
const Publish = () => {

    const classes = useStyles()
    const [files, setFiles] = useState([])

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) => {
        const newFiles = acceptedFile.map(file => {
            return Object.assign(file, {
                preview: URL.createObjectURL(file )
            })
        })
        setFiles([
            ...newFiles,
            ...files
        ])
        }
    })

    const handleRemoveFile = fileName => {
        const  newFileSate = files.filter(file => file.name !== fileName)
        setFiles(newFileSate)
    }

    return (
        <TemplateDefault>
            <Container maxWidth='sm' className={classes.container}>
                <Typography component='h1' variant='h2' align='center' color='textPrimary'>
                    Publicar Anúncio
                </Typography>
                <Typography component='h5' variant='h5' align='center' color='textPrimary'>
                    Quanto mais detalhes melhor!
                </Typography>
            </Container>

            <Container maxWidth='md' className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component='h6' variant='h6' color='textPrimary'>
                        Título do anúncio
                    </Typography>
                    <TextField 
                    label='Ex: Bicicleta aro 18'
                    size='small'
                    fullWidth
                    />
                    <br /><br />
                    <Typography component='h6' variant='h6' color='textPrimary'>
                        Categoria
                    </Typography>
                    <Select
                    native
                    value=""
                    fullWidth
                    onChange={() => {}}
                    >
                        <option value="">Selecione</option>
                        <option value={1}>Bebê e Infantil</option>
                        <option value={2}>Casa</option>
                        <option value={1}>Mesa e banho</option>
                        <option value={1}>Jardim</option>
                        <option value={1}>Carros e motos</option>
                    </Select>


                </Box>
            </Container>

            <Container maxWidth='md' className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component='h6' variant='h6' color='textPrimary'>
                        Imagens
                    </Typography>
                    <Typography component='div' variant='body2' color='textPrimary'>
                        A primeira imagem é a foto principal do anúncio
                    </Typography>
                    <Box className={classes.thumbsContainer}>
                        <Box className={classes.dropzone} {...getRootProps()}>
                            <imput {...getInputProps()} />
                            <Typography variant='body2' color='textPrimary'>
                                Clique ou arraste para adicionar uma imagem
                            </Typography>
                        </Box>
                        {
                            files.map((file, index) => (

                            <Box
                                key = {file.name}
                                className={classes.thumb}
                                style={{ backgroundImage: `url(${file.preview})`}}
                            >
                                {
                                    index === 0 ?
                                        <Box className={classes.mainImage}>
                                            <Typography variant='body2' color='secondary'>
                                                Principal
                                            </Typography>
                                        </Box>
                                        : null
                                }
                                <Box className={classes.mask}>
                                    <IconButton color='secondary' onClick={() => handleRemoveFile(file.name)}>
                                        <DeleteForever fontSize='medium' />
                                    </IconButton>

                                </Box>
                            </Box>
                            ))
                        }
                        
                    </Box>
                </Box>
            </Container>

            <Container maxWidth='md' className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component='h6' variant='h6' color='textPrimary'>
                        Descrição
                    </Typography>
                    <Typography component='div' variant='body2' color='textPrimary'>
                        Escreva os detalhes do anúncio
                    </Typography>
                    <TextField 
                        multiline
                        minRows={6}
                        variant='outlined'
                        fullWidth
                    />

                </Box>
            </Container>

            <Container maxWidth='md' className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component='h6' variant='h6' color='textPrimary'>
                        Dados de contato
                    </Typography>
                    <TextField 
                        label='Nome'
                        variant='outlined'
                        size='small'
                        fullWidth
                    />
                    <br /><br />
                    <TextField 
                        label='E-mail'
                        variant='outlined'
                        size='small'
                        fullWidth
                    />
                    <br /><br />
                    <TextField 
                        label='Telefone'
                        variant='outlined'
                        size='small'
                        fullWidth
                    />

                </Box>
            </Container>

            <Container maxWidth='md' className={classes.boxContainer}>
                <Box align='right'>
                    <Button variant='contained' color='primary'>
                        Publicar anúncio
                    </Button>
                </Box>
            </Container>
        </TemplateDefault>
    )
}

export default Publish