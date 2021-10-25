export const mockUniData = [
    {
        itemID: 1,
        itemName: "NYU",
        itemLogoPath: "./uniLogos/nyu.png",
        itemType: "uni",
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
        classes: [
            {
                itemID: 4,
                itemName: "CLSS 206",
                itemType: "class",
                enrolledStudents: 50
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
                itemName: "Greek History.pdf",
                itemType: "file",
                commentCount: 7,
                likeCount: 10,
                dislikeCount: 2
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
                itemName: "Data Structures CheatSheet",
                itemType: "file",
                commentCount: 3,
                likeCount: 13,
                dislikeCount: 1
            }
        ]
    },

]

export const mockFileData = [
    {
        itemID: 6,
        itemName: "Data Structures CheatSheet",
        itemType: "file",
        commentCount: 3,
        likeCount: 13,
        dislikeCount: 1,
        downloadCount: 10,
    },
    {
        itemID: 5,
        itemName: "Greek History.pdf",
        itemType: "file",
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



