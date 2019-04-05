import React from 'react'
import Grid from '../template/grid.jsx'
import IconButton from '../template/iconButton.jsx'

export default props => (
    <div>
        <div className="todoForm" role="form">
            <Grid cols='12 9 10'>
                <input type="text" className="form-control" id="description" placeholder="Adicione uma tarefa"></input>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus'
                onClick={props.handleAdd}></IconButton>
            </Grid>
        </div>
    </div>
)