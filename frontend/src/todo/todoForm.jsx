import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, pesquisar } from './todoActions'

class TodoForm extends Component{
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.pesquisar()
    }

    keyHandler(e){
        if (e.key === 'Enter'){
            e.shiftKey ? this.props.changeDescription() : this.props.handleAdd()
        }
    }

    render(){
        return (
            <div role="form" className="todoForm">
                <Grid cols='12 9 10'>
                    <input id="description" 
                           className="form-control" 
                           placeholder="Adicione uma Tarefa" 
                           onKeyUp={this.keyHandler} 
                           value={this.props.description} 
                           onChange={this.props.changeDescription}>
                    </input>
                </Grid>

                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus' onClick={this.props.handleAdd}></IconButton>
                    <IconButton style='info' icon='search' onClick={this.props.handleSearch}></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({changeDescription, pesquisar}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)