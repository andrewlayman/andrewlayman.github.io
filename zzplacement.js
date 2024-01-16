// This file describes a model of the page in terms of a grid of horizontal and vertical lines
//  and the placement of document elements against that grid.  
//  On load, it lays-out the elements against that grid.


// The page grid
var h_lines =  [
                {   id: 0 },
          
                {   id: 1,    min: 80,  max: 10000  },
                {   id: 2,    min: 0,   max: 10000  },
                {   id: 3,    min: 0,   max: 10000  },
                {   id: 3.1,  min: 1,	max: 1 }		// 1px bottom border
            ];
                                    
var v_lines =  [           
                {   id: 0 },
                {   id: .9,  min: 436, max: 896   },
                {   id: 1 , min: 24, max: 24    },
                {   id: 2,  min: 230, max: 262   }
            ];
                                    
// Position of elements within the grid
var element_places =  [
                    {           id:        "LinkBarBlock",
                                row_pos:          { start: 0, end: 1 },
                                col_pos:          { start: 0, end: 1 }
                    },
                    {           id:         "LinkBarRightBlock",
                                row_pos:          { start: 0, end: 1 },
                                col_pos:          { start: 1, end: 2 } 
                    },
                    {           id:        "SideColumnBlock",
                                row_pos:          { start: 1, end: 2 },
                                col_pos:          { start: 1, end: 2 }
                    }, 
                    {           id:        "MainColumnBlock",
                                row_pos:          { start: 1, end: 2 },
                                col_pos:          { start: 0, end: .9 }
                    }, 
                    {           id:        "InternalNavBlock",
                                row_pos:          { start: 2, end: 3 },
                                col_pos:          { start: 1, end: 2 }
                    },
                    {           id:        "FinePrintBlock",
                                row_pos:          { start: 2, end: 3 },
                                col_pos:          { start: 0, end: .9 }
                    },
                    {           id:        "MainColumn",
                                row_pos:          { start: 1, end: 3 },
                                col_pos:          { start: 0, end: 1 }
                    },
                    {           id:        "SideColumn",
                                row_pos:          { start: 1, end: 3 },
                                col_pos:          { start: 1, end: 2 }
                    },
                    {           id:        "BackgroundBlock",
                                row_pos:          { start: 1, end: 3 },
                                col_pos:          { start: 0, end: 2 }
                    },

                    {           id:        "PageBlock",       
                                row_pos:          { start: 0, end: 3.1 },
                                col_pos:          { start: 0, end: 2 }
                    }

                ];


