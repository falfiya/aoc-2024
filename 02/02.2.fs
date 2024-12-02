module Puzzle1

open System

let InputFile = "input.txt"
let Lines = IO.File.ReadAllLines InputFile

type Levels = uint list

let lineToLevels (raw : string) : Levels =
   raw.Split(' ') |> Array.toList |> List.map UInt32.Parse

let Levels = Lines |> Array.map lineToLevels

type GoodFn = uint -> uint -> bool
let allGood (good: GoodFn) (levels: Levels) =
   let rec inner (prev: uint option) (rest: Levels) =
      match rest with
      | [] -> true
      | head::tail ->
         let isGood =
            match prev with
            | None -> true
            | Some p -> good p head
         if isGood
         then inner (Some head) tail
         else false
   inner None levels

let problemDampener (good: GoodFn) (levels: Levels) =
   let rec inner (prev: Levels) (skip: uint option) (post: Levels) =
      match skip with
      | None -> false
      | Some s ->
         let tryThis = prev @ post
         if allGood good tryThis
         then true
         else inner (prev @ [s]) (List.tryHead post) post[1..]
   inner [] (Some levels[0]) levels[1..]

let asc prev curr =
   let diff = curr - prev
   0u < diff && diff < 4u

let desc prev curr =
   let diff = prev - curr
   0u < diff && diff < 4u

let isSafe levels = problemDampener asc levels || problemDampener desc levels

Levels
|> Array.map isSafe
|> Array.filter id
|> Array.length
|> Console.WriteLine
