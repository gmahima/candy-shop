import React, {useEffect} from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { loadCandies } from '../redux/ActionCreators'

const mapStateToProps = (state) => {
    return {
        candies: state.candies
    }
}
const mapDispatchToProps = (dispatch) => {
    return (
        {
            loadCandies: () => {dispatch(loadCandies())}
        }
    )
}
function Home ({candies, loadCandies}) {
    useEffect(() => {
        loadCandies()
    }, [])
    return (
        <div>
            <h1>Buy Some Candy</h1>
            {console.log(candies.candies)}
            {candies.candies.length>0 && (
                <ul>
                    {candies.candies.map((c) => {
                        return (
                            <li key={c}>{c}</li>
                        )
                    })}

                </ul>
            )}
            {candies.isLoading && <h6>loading...</h6>}
            
        </div>
    )
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))