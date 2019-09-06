import React, { Component } from 'react';

import Math from '../../Components/Math/Math';

class ChildrenDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
            <>
                <Math
                  first={6}
                  operator="+"
                  second={2}
                >
                  {(first, second, operator, result) => (
                    <h3>
                      {first}
                      {' '}
                      {operator}
                      {' '}
                      {second}
                      {' '}
                            =
                      {' '}
                      {result}
                    </h3>
                  )}
                </Math>
                <Math
                  first={10}
                  operator="+"
                  second={22}
                >
                  {(first, second, operator, result) => (
                    <h3>
                            when we add
                      {' '}
                      {first}
                      {' '}
                            with
                      {' '}
                      {second}
                      {' '}
                            then we will get
                      {' '}
                      {result}
                      {' '}
                            as a result
                    </h3>
                  )}
                </Math>
                <Math
                  first={6}
                  operator="/"
                  second={0}
                >
                  {(first, second, operator, result) => (
                    <h3>
                      {first}
                      {' '}
                      {operator}
                      {' '}
                      {second}
                      {' '}
                            =
                      {' '}
                      {result}
                    </h3>
                  )}
                </Math>
                <Math
                  first={6}
                  operator="^"
                  second={0}
                >
                  {(first, second, operator, result) => (
                    <h3>
                      {first}
                      {' '}
                      {operator}
                      {' '}
                      {second}
                      {' '}
                            =
                      {' '}
                      {result}
                    </h3>
                  )}
                </Math>
            </>
    );
  }
}
export default ChildrenDemo;