# From: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/python

# You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

# Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

# likes([]) # must be "no one likes this"
# likes(["Peter"]) # must be "Peter likes this"
# likes(["Jacob", "Alex"]) # must be "Jacob and Alex like this"
# likes(["Max", "John", "Mark"]) # must be "Max, John and Mark like this"
# likes(["Alex", "Jacob", "Mark", "Max"]) # must be "Alex, Jacob and 2 others like this"
# For 4 or more names, the number in and 2 others simply increases.
 
#My solution - brute force effort 


def likes(names):
    res = ""
    count = 0; 
    
    if len(names) == 0:
            res = "no one likes this"
    elif len(names) == 1:
        res = names[0] + " likes this"
    elif len(names) == 2: 
        res = names[0] + " and " + names[1] + " like this"
        #Everything up to this point has a time/space complexity of O(1) BECAUSE - you hold everything in place, and you know exactly where to retreive the data - it doesn't have to loop anything
    else:  
        #Starting here, you have an O(n) solution. You loop through the entire array once. Time complexity goes up as you add more items to the array and increase the count. Space complexity is still O(1)? 
        #Space complexity thinking... you are looping through the array in place, and you are storing a single integer and a string... so you don't store more after three names?
        for ind in range(len(names)):            
            if ind == 0: 
                res = names[ind] + ", "
            elif ind == 1:
                res += names[ind]
            elif ind == 2 and ind == len(names)-1:
                res = res + " and " + names[ind] + " like this"
                return res
            else: 
                count = count + 1
                
        res = res + " and " + str(count) + " others like this"
    
    return res
    #your code here

    #solutions from code wars: 0(1) solution

    def likes(names):
        if len(names) == 0:
            return "no one likes this"
        elif len(names) == 1:
            return "%s likes this" % names[0]
        elif len(names) == 2:
            return "%s and %s like this" % (names[0], names[1])
        elif len(names) == 3:
            return "%s, %s and %s like this" % (names[0], names[1], names[2])
        else:
            return "%s, %s and %s others like this" % (names[0], names[1], len(names)-2) #if larger than 3, the string stays the same. Simple math makes it easy to change the string. No need to loop through and count

    #What is this???

    def likes(names):
    
        n = len(names)
        #store the length of the array in the n variable

        #return a dictionary tha give a fstring for each number of names that you want to change
        return {
            0: 'no one likes this',
            1: '{} likes this', 
            2: '{} and {} like this', 
            3: '{}, {} and {} like this', 
            4: '{}, {} and {others} others like this'
        }[min(4, n)].format(*names[:3], others=n-2)

        # from that dictionary, return the lowest number between 4 and the length of the list. If the list has anything greater than three items, it will return the 4th string

        # then format that string to fill the curly braces with up to the first three names in the array and the number of "others"... which is length - 2