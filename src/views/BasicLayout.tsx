import React from 'react'
import {
    Col, Row,
} from 'antd'
import {connect} from 'react-redux'
import {MovieSearchFormCard, NominationCard, ResultCard} from '../components'

const BasicLayout = ({dispatch, movies}: any) => {
    const {result, nomination} = movies
    const addNomination = (movie: any) => {
        dispatch({type: 'ADD_NOMINATION', payload: movie})
    }
    const removeNomination = (movie: any) => {
        dispatch({type: 'REMOVE_NOMINATION', payload: movie})
    }

    return (<Row>
      <Col span={6} />
      <Col span={12} style={{marginTop: '10%'}}>
        <Row>
          <Col span={24}>
            <MovieSearchFormCard dispatch={dispatch} movies={movies} />
          </Col>
        </Row>
        <Row style={{marginTop: 10}}>
          <Col span={11}>
            <ResultCard result={result} addNomination={addNomination} />
          </Col>
          <Col span={2} />
          <Col span={11}>
            <NominationCard removeNomination={removeNomination} nomination={nomination} />
          </Col>
        </Row>
      </Col>
      <Col span={6} />
    </Row>)
}

const mapStateToProps = (state: any) => ({
    movies: state.movies,
})

BasicLayout.displayName = 'BasicLayout'
export default connect(mapStateToProps)(BasicLayout)
