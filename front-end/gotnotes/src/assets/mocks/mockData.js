export const mockUniData = [
    {
        itemID: 1,
        itemName: "NYU",
        itemLogoPath: "./uniLogos/nyu.png",
        itemType: "uni",
        courseCount: 1,
        classes: [
            {
                itemID: 2,
                itemName: "CSCI-UA 102",
                itemType: "class",
                enrolledStudents: 100
            },
        ]
    },
    {
        itemID: 3,
        itemName: "Columbia",
        itemLogoPath: "./uniLogos/columbia.png",
        itemType: "uni",
        courseCount: 2,
        classes: [
            {
                itemID: 4,
                
            },
            {
                itemID: 7,
            },
        ]
    },

]

export const mockClassData = [
    {
        itemID: 4,
        itemName: "CLSS 206",
        itemType: "class",
        enrolledStudents: 50,
        files: [
            {
                itemID: 5,
                
            }
        ]
    },
    {
        itemID: 2,
        itemName: "CSCI-UA 102",
        itemType: "class",
        enrolledStudents: 100,
        files: [
            {
                itemID: 6,
                
            }
        ]
    },

]

export const mockFileData = [
    {
        itemID: 6,
        itemName: "Data Structures CheatSheet.xls",
        itemType: "file",
        fileType: "xls",
        commentCount: 3,
        likeCount: 13,
        dislikeCount: 1,
        downloadCount: 10,
    },
    {
        itemID: 5,
        itemName: "Greek History.pdf",
        itemType: "file",
        fileType: "pdf",
        commentCount: 7,
        likeCount: 10,
        dislikeCount: 2,
        downloadCount: 25
    }


]

export const mockUserData = [
    {
        userID: 1,
        userName: "GotNotes",
        userSubscribed: [
            2,
        ]
    }

]

export const currentUserID = 1



