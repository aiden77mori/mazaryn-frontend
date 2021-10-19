import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { notification } from 'antd';
import { GLOBAL_ERROR, GLOBAL_INFO, GLOBAL_SUCCESS } from '../../redux/types';


export const ShowToasts = memo((props) => {
    useEffect(() => {
        if (props.globalError !== null) {
          removeGlobalError();
        }
        if (props.globalSuccess !== null) {
          removeGlobalSuccess();
        }
      }, [props])
    
      const renderGlobalSuccess = () => {
        if(props.globalSuccess){
            notification['success']({
              key: 'success',
              message: props.globalSuccess
            })
        } 
      };
    
      const renderGlobalWarning = () => {
        if(props.globalWarning){
         notification['warning']({
            key: 'warning',
            message: props.globalWarning
            })
        } 
      };
    
      const renderGlobalError = () => {
        if(props.globalError){
            Object.entries(props.globalError).map(([key, values]) => {
              (values || []).map((err, i)=> {
                notification['error']({
                  key: `err${i}`,
                  message: err
                  })
              })
            }) 
        }
      }
    
      const renderGlobalInfo = () => {
        if(props.globalInfo){
         notification['info']({
            key: 'info',
            message: props.globalInfo
            })
        } 
      };
    
      const removeGlobalSuccess = () => {
        setTimeout(() => {
          props.deleteGlobalSuccess();
        }, 5000);
      };
    
      const removeGlobalError = () => {
        setTimeout(() => {
          props.deleteGlobalError();
        }, 5000);
      };
    
      const removeGlobalInfo = () => {
        setTimeout(() => {
          props.deleteGlobalInfo();
        }, 5000);
      };
    
    return (
        <div>
            {renderGlobalError()}
            {renderGlobalSuccess()}
            {renderGlobalWarning()}
            {renderGlobalInfo()} 
        </div>
    )
})

const mapStateToProps = (state) => ({
    globalSuccess : state.common.globalSuccess,
    globalError : state.common.globalError,
    globalWarning : state.common.globalWarning,
    globalInfo : state.common.globalInfo,
  })
  
const mapDispatchToProps = (dispatch) => ({
    deleteGlobalError: () => {
      dispatch({ type: GLOBAL_ERROR, payload: null });
    },
    deleteGlobalSuccess: () => {
      dispatch({ type: GLOBAL_SUCCESS, payload: null });
    },
    deleteGlobalInfo: () => {
      dispatch({ type: GLOBAL_INFO, payload: null });
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(ShowToasts)
