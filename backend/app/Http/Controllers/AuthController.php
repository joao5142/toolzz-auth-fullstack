<?php

namespace App\Http\Controllers;

use App\Exceptions\auth\AuthException;
use App\Http\Controllers\Controller;
use App\Http\Requests\auth\LoginRequest;
use App\Http\Requests\auth\RegisterUserRequest;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();

        try {
            if (Auth::attempt($credentials)) {
                $user = Auth::user();

                $token = $user->createToken('api-token')->plainTextToken;

                return response()->json(['access_token' => $token], 200);
            } else {
                throw new AuthException('Error ao se logar , tente novamente mais tarde');
            }
        } catch (Exception $err) {

            return response()->json(['message' => 'Error do servidor', $err->getMessage()], 500);
        }
    }

    public function register(RegisterUserRequest $request)
    {

        $user_data = $request->validated();

        try {

            DB::beginTransaction();

            User::create([
                'name' => $user_data['name'],
                'email' =>   $user_data['email'],
                'password' => Hash::make($user_data['password'])
            ]);

            DB::commit();

            return response()->json(['message' => 'Sucesso', 'success' => true], 200);
        } catch (Exception $err) {
            DB::rollBack();

            return response()->json(['message' => 'Error ao cadastrar usuario', 'success' => false], 500);
        }
    }

    public function logout()
    {
        try {
            Auth::user()->tokens()->delete();

            return response()->json(['message' => 'Sucesso', 'success' => true], 200);
        } catch (Exception $err) {
            return response()->json(['message' => 'Error ao deslogar', 'success' => false], 500);
        }
    }
}
