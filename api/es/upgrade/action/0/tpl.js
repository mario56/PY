module.exports = {
  template:"py_tpl",
  mappings:{
    user:{
      properties:{
        username:{
          type: 'string',
          index: 'not_analyzed'
        },
        nickname:{
          type: 'string',
          index: 'not_analyzed'
        },
        phone:{
          type: 'long',
          index: 'not_analyzed'
        },
        state:{
          type: 'string',
          index: 'not_analyzed'
        },
        credit:{
          type: 'short'
        },
        email:{
          type: 'string',
          index: 'not_analyzed'
        },
        password:{
          type: 'string',
          index: 'not_analyzed'
        },
        address:{
          type: 'string',
          index: 'not_analyzed'
        },
        avatar:{
          type: 'string',
          index: 'not_analyzed'
        }
      }
    },
    attr_store:{
      properties:{
        attr_key:{
          type: 'string',
          index: 'not_analyzed'
        },
        attr_name:{
          type: 'string',
          index: 'not_analyzed'
        }
      }
    },
    py_info:{
      properties:{
        create_user_id:{
          type: 'string',
          index: 'not_analyzed'
        },
        title:{
          type: 'string',
          index: 'not_analyzed'
        },
        deadline:{
          type: 'long'
        },
        create_time:{
          type: 'long'
        },
        count:{
          type: "short"
        },
        price:{
          type: "short"
        },
        arrive_date:{
          type: "short"
        },
        good_brand:{
          type:"string",
          index: 'not_analyzed'
        },
        good_from:{
          type:"string",
          index: 'not_analyzed'
        },
        good_link:{
          type:"string",
          index: 'not_analyzed'
        },
        good_attr:{
          type: "nested" //[{attr_key:'11',attr_value:[sss,ddd,fff]}]
        },
        good_desc:{
          type:"string",
          index: 'not_analyzed'
        },
        good_imgs:{
          type:"string"
        },
        py_state:{
          type:'string',
          index: 'not_analyzed'
        }
      }
    },
    py_apply:{
      properties:{
        py_info_id:{
          type: 'string',
          index: 'not_analyzed'
        },
        apply_user_id:{
          type: 'string',
          index: 'not_analyzed'
        },
        apply_user_name:{
          type: 'string',
          index: 'not_analyzed'
        },
        apply_attr:{
          type:'nested' //[{attr_key:'11',attr_value:'22'}]
        },
        apply_count:{
          type:'short'
        },
        apply_state:{
          type:'string',//pass,reject,py_delete,waiting
          index: 'not_analyzed'
        }
      }
    },
    py_comment:{
      properties:{
        py_info_id:{
          type: 'string',
          index: 'not_analyzed'
        },
        user_id:{
          type: 'string',
          index: 'not_analyzed'
        },
        content:{
          type: 'string',
          index: 'not_analyzed'
        },
        rate:{
          type:'short'
        },
        time:{
          type:'long'
        }
      }
    }
  }
};