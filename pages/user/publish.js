import { Container, Typography } from '@material-ui/core'
import TemplateDefault from '../../src/templates/Default'

const Publish = () => {


    return (
        <TemplateDefault>
            <Container maxWidth='sm'>
                <Typography component='h1' variant='h2' align='center' color='primary'>
                    Publicar Anúncio
                </Typography>
                <Typography component='h5' variant='h5' align='center' color='primary'>
                    Quanto mais detalhes melhor!
                </Typography>
            </Container>
        </TemplateDefault>
    )
}

export default Publish