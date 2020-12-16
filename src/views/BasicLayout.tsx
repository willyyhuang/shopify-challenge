import {Col, Row} from 'antd'
import {connect} from 'react-redux'
import React from 'react'
import {MovieSearchFormCard, NominationCard, ResultCard} from '../components'
import {searchMovie} from '../services'

export type MovieType = {
  Title: string,
  Year: string,
}

type MovieStateType = {
  result: MovieType[],
  nomination: MovieType[],
  searchValue: string,
}

type StoreStateType = {
  movies: MovieStateType
}

type DispatchArgType = {
  type: string,
  payload: any,
}

type BasicLayoutPropType = {
  dispatch: (arg: DispatchArgType) => void,
  movies: MovieStateType,
}

const BasicLayout = ({dispatch, movies}: BasicLayoutPropType) => {
    const {result, nomination, searchValue} = movies
    const addNomination = (movie: MovieType) => {
        dispatch({type: 'ADD_NOMINATION', payload: movie})
    }
    const removeNomination = (movie: MovieType) => {
        dispatch({type: 'REMOVE_NOMINATION', payload: movie})
    }

    const search = () => {
      searchMovie(searchValue).then((response: any) => {
        const {data} = response
        if (data.Response === 'True') {
          const payload = {
            Title: data.Title,
            Year: data.Year,
          }
          dispatch({type: 'ADD_RESULT', payload})
        }
      })
    }

    const setSearchValue = (value: string) => {
      dispatch({type: 'SET_SEARCH_VALUE', payload: value})
    }

    return (<Row>
      <Col span={6} />
      <Col span={12} style={{marginTop: '10%'}}>
        <Row>
          <Col span={24}>
            <MovieSearchFormCard setSearchValue={setSearchValue} search={search} searchValue={searchValue} />
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

const mapStateToProps = (state: StoreStateType) => ({
    movies: state.movies,
})

BasicLayout.displayName = 'BasicLayout'
export default connect(mapStateToProps)(BasicLayout)
